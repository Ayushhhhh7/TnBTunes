module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './src/process/api/',
          '@assets': './src/show/assets',
          '@components': './src/show/components',
          '@helpers': './src/process/helpers',
          '@navigator': './src/show/navigator',
          '@screens': './src/show/screens',
          '@theme': './src/show/theme',
          '@utils': './src/show/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
