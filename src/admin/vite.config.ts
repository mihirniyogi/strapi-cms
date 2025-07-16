import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: ['strapi2.mihirniyogi.com', '192.168.0.4', 'localhost']
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
