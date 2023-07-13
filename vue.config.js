const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.worker.js$/,
      use: {
        loader: "worker-loader",
        options: { inline: true, name: "workerName.[hash].js" },
      },
    });
  },
  parallel: false,
  chainWebpack: (config) => {
    config.output.globalObject("this");
  },
};
