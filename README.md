主要完成这些功能

- 1.将上一个项目，首页的页面内容， 图书展示页⾯ 添加内容分X-TAG 、 PolymerJS、 omi 三种库
<x-books></x-books><x-insert></x-insert>
- 2.Gulp 编译原来的node项⽬目 把import <-require。gulp-rollup对原来node的项目进行流清洗。
  - 为什么使⽤Gulp不使⽤Webpack编译NodeJS?
  - (1) Gulp 简单 很简单对es6需要的地方进⾏
  - (2) 清洗他的时候 灵活
  - (3) Webpack 前端包工具 慢！！！
- 3.前端分离出来 引入Webpack 编译前端的代码到指定目录
- 4.补全测试 RIZE、 Service 然后部署到Travis、 Jenkins平台根据每次的提交直接提交到远程阿里云、腾讯云
- 5.开发一个命令行 能够创建项目、辅助开发


