import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./css/bootstrap.min.css";
import i18n from "./assets/language";
import Router from "./router";
process.env.VUE_APP_MOCK === 'true' && require("./mock");
import axios from "axios";
import VueAxios from "vue-axios";
import _ from "lodash";
import App from "./App.vue";
import { getCurrencySymbolMap } from "./js/CurrencySymbolMap";
import globalVariable from "@/api/globalVariable";

//TODO
//获取本地语言
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";
import elementEnLocale from "element-plus/lib/locale/lang/en";

const app = createApp(App);

app.config.globalProperties._ = _;
app.config.globalProperties.getCurrencySymbolMap = getCurrencySymbolMap;
app.config.globalProperties.globalVariable = globalVariable;

app.use(Router)
    .use(VueAxios, axios)
    .use(ElementPlus, {
        // locale: languageLocale === "zh_CN" ? elementZhLocale : elementEnLocale,
        locale: "zh_CN",
    })
    .use(i18n)
    .mount("#app");
