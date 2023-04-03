# better-invoice

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


<!-- git remote set-url origin https://<access-token>@github.com/tigerdahuacao/better-paypal-invoice -->

~~git remote set-url origin https://github.com/tigerdahuacao/better-paypal-invoice.git~~  
git remote add origin XXXXXX  
~~new token for push code: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~~  

待定:
1. 英语的国际化文件, 获取本地语言状态
2. PayPal原有数据不够的情况下, 属性加在哪里
3. 账单编号是id还是invoice_number
4. 总体的左右结构在小窗口下变成上下结构
5. 图片和css放到static文件夹下
6. 加载遮罩
7. 动态的其他支付方式(inline guest之类)

关于打包: 似乎这里不用加上 --mode也问题不大, 在console中获取的值可以看见就是生产环境的
```json
 "scripts": {
    "dev": "vue-cli-service serve --mode development", // dev是给开发环境自定义的名字，随便写，npm run 后面加这个名字。这里mode后面的 development就是上面.env.development文件中的VUE_APP_MODE的值，运行dev环境就直接 npm run dev
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build --mode production",
    "lint": "vue-cli-service lint"
  },
```

关于路由: 因为现在没有部署到服务器上, 所以用了hash模式

> https://www.jianshu.com/p/bdcbd7f57bb7