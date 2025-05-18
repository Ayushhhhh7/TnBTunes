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
          '@assets': './src/show/assets',
          '@components': './src/show/components',
          '@navigator': './src/show/navigator',
          '@screens': './src/show/screens',
          '@utils': './src/show/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
