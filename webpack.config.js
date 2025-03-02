import path from 'path'
export default {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('web'),
    },
  };