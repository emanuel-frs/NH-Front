export default function (api: any) {
    api.cache(true);
  
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'babel-plugin-dotenv-import',
          {
            moduleName: '@env',
            path: '.env',
            safe: false,
            allowUndefined: true,
          },
        ],
      ],
    };
  }
