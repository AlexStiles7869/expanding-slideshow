import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/js/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    postcss({
      extract: false, // Don't extract CSS to a file (default: dist/index.css)
    })
  ],
  external: ['embla-carousel', 'photoswipe'] // avoid bundling dependencies
};

