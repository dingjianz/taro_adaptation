#### Node 版本 16.10.0

```js
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

项目初始化

```js
$ taro init myApp

$ npx @tarojs/cli init myApp

```
### taro适配
 ```js
    /src/index.html
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          var ua = navigator.userAgent;
          if (!/(iPhone|iPad|iPod|iOS)/i.test(ua) && !/(Android)/i.test(ua)) {
            docEl.style.fontSize = 16 + "px";
          } else {
            docEl.style.fontSize = 16 * (clientWidth / 375) + "px"; // 针对于设计稿375
          }
        };
      if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener("DOMContentLoaded", recalc, false);
      })(document, window);

    /config/index.js
    designWidth: 375,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
      375: process.env.TARO_ENV === 'weapp' ? 2 : 2.5 / 1, // bug 微信和h5的比例不一样
    },

// https://taro-docs.jd.com/docs/size
      onePxTransform: true,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      baseFontSize: 16, // 主要是这个
      maxRootSize: 40,
      minRootSize: 20,
 ```
