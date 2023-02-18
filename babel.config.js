const isDEV = process.env.NODE_ENV === "development"; // 是否是开发模式
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          // EcmaScript proposals, default is false
          // proposals: true,
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    isDEV && require.resolve("react-refresh/babel"),
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ].filter(Boolean),
};
