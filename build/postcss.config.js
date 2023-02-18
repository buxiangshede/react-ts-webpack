const path = require("path");

module.exports = {
  plugins: [
    "postcss-import",
    [
      "postcss-preset-env",
      {
        features: {
          "nesting-rules": true, // 支持cssnest
        },
      },
    ],
    "autoprefixer", // 在css前添加不同浏览器的前缀
    "cssnano", //  CSS 进行压缩
  ],
};
