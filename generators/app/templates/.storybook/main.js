const path = require("path");
const webpack = require("webpack");

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", 'storybook-addon-sass-postcss', "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },
  "staticDirs": ['../static'],
  "webpackFinal": async config => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: "twing-loader",
        options: {
          environmentModulePath: path.resolve(`${__dirname}/environment.js`)
        }
      }
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  },
  docs: {
    autodocs: true
  }
};
