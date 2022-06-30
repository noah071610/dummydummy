const config = {
  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },
};

module.export = config;
