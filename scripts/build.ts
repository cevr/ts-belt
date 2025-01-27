import { task, desc, option, setGlobalOptions } from 'foy'
import * as globby from 'globby'

setGlobalOptions({
  strict: true,
  logCommand: false,
  loading: false,
})

type Options = {
  readonly runTests: boolean
}

type DevOptions = {
  readonly namespace: string
  readonly test: string
}

desc('Build dist')
option('-t, --run-tests', 'run tests')
task<Options>('dist', async ctx => {
  await ctx.exec([
    'yarn clean',
    'yarn re:clean',
    'yarn re:build',
    'yarn transform all',
    'yarn generate docs',
    'node esbuild.config.js',
  ])

  const files = await globby('dist/**/index.js')
  const js = files.join(' ')

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
  )

  await ctx.exec(['yarn generate tsc', 'yarn generate flow'])
  await ctx.fs.copyFile('./src/global.d.ts', './dist/types/global.d.ts')
  await ctx.fs.copyFile('./src/types.ts', './dist/types/types.d.ts')

  if (ctx.options.runTests) {
    await ctx.exec('yarn test run -c')
  }
})

desc('Build for development purposes')
option('-t, --test <name>', 'run tests for a single file')
option('-n, --namespace <name>', 'namespace')
task<DevOptions>('dev', async ctx => {
  if (!ctx.options.namespace) {
    throw new Error('-n is required')
  }

  await ctx.exec([
    `yarn transform all -r -n ${ctx.options.namespace}`,
    'node esbuild.config.js',
  ])

  const files = await globby(`dist/**/${ctx.options.namespace}/index.js`)
  const js = files.join(' ')

  await ctx.exec(
    `node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`,
  )

  await ctx.exec('yarn generate tsc')

  if (ctx.options.test) {
    await ctx.exec(
      `yarn test run -n ${ctx.options.namespace} -f ${ctx.options.test}`,
    )
  }
})
