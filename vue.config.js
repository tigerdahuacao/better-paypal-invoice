const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    publicPath:process.env.NODE_ENV === "production" ? "./" : "/", //改一下编译后js和css的引用路径
    outputDir:'dist',
    indexPath:"index.html",
});
