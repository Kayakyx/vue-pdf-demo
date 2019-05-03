# vue-pdf-demo

> 'vue项目导出pdf,练示例'


## PDF导出的两种方式
    1.使用 html2Canvas + jsPDF  导出PDF， 这种方式什么都好，就是下载的pdf太模糊了。对要求好的pdf这种方式真是不行啊！
    2.调用浏览器自身的方法。window.print() 来打印（打印时可选下载），这种方式打印出来会清楚点，但纯在浏览器兼容问题。
     谷歌浏览器比较好用点。

> 观察两种效果，请下载项目运行查看。





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
