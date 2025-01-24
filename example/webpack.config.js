const { WebpackInjectPlugin } = require('..');

module.exports = {
  entry: './entry.js',
  mode: 'development',
  plugins: [
    new WebpackInjectPlugin(() => `console.log('hello world');`),
    new WebpackInjectPlugin(() => `console.log('second injected code');`),
  ],
};
