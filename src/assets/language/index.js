import { createI18n } from "vue-i18n/dist/vue-i18n.cjs.js";
import zhCN from "./lang/zh_CN";
import enUS from "./lang/en_US";

const i18n = createI18n({
    //TODO
    locale: localStorage.lang || "zh_CN", // 默认显示语言
    messages: {
        zh_CN: {
            ...zhCN,
        }, 
        en_US: {
            ...enUS,
        }, 
    },
});

export default i18n;
