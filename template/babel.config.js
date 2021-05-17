module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@root": "./src",
          "@assets": "./src/assets",
          "@styles": "./src/assets/styles",
          "@constants": "./src/constants",
          "@services": "./src/services",
          "@store": "./src/store",
          "@actions": "./src/store/actions",
          "@reducers": "./src/store/reducers",
          "@appComponents": "./src/components",
          "@sharedComponents": "./src/components/shared"
        }
      }
    ]
  ]
};
