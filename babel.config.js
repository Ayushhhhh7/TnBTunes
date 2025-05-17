module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/show/components',
          '@screens': './src/show/screens',
          '@utils': './src/show/utils',
          '@assets': './src/show/assets',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
