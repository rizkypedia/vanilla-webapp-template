import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  outfile: 'www/js/bundle.js',
  bundle: true,
  minify: true, 
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  platform: 'browser',
  format: 'esm',
  globalName: undefined,
  sourcemap: true,
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.css': 'css',
  },

})

await ctx.watch()

let { hosts, port } = await ctx.serve({
  servedir: 'www',
})

// eslint-disable-next-line no-undef
console.log(`Serving at http://${hosts}:${port}`)