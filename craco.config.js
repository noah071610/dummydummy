const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    plugins: [
      '@emotion/babel-plugin',
      'babel-plugin-twin',
      'babel-plugin-macros',
    ],
  },
};
