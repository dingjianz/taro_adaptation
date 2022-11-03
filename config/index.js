const config = {
  projectName: "myTaroApp",
  date: "2022-11-3",
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: process.env.TARO_ENV === 'weapp' ? 2 : 2.5 / 1,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: "webpack5",
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          baseFontSize: 16,
          maxRootSize: 40,
          minRootSize: 20,
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    // 'postcss-px-scale': {
    //   enable: true,
    //   config: {
    //     scale: 0.5, // 缩放为1/2
    //     units: 'rpx',
    //     includes: ['taro-ui']
    //   }
    // }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    esnextModules: ["taro-ui"],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          baseFontSize: 16,
          maxRootSize: 40,
          minRootSize: 20,
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    // 'postcss-px-scale': {
    //   enable: true,
    //   config: {
    //     scale: 0.5, // 缩放为1/2
    //     units: 'rem',
    //     includes: ['taro-ui']
    //   }
    // }
  },
  rn: {
    appName: "taroDemo",
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
