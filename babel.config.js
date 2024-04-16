module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-flow-strip-types',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
