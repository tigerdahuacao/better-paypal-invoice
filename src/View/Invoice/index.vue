<template>
    <div class="container-lg bg-light card">
        <div class="py-5">
            <h5>
                <b>{{ $t("invoice.invoice_title") }}</b>
            </h5>
        </div>
        <el-container>
            <el-main>
                <LeftMainPart v-if="httpFlag && httpResponse" :responseObj="httpResponse"></LeftMainPart>
            </el-main>
            <el-aside width="30%">
                <RightMainPart v-if="httpFlag && httpResponse" :responseObj="httpResponse"></RightMainPart>
            </el-aside>
        </el-container>
        <!-- <button @click="getData">搜索</button> -->
        <LegalInfo href="https://www.bing.com" legalInfo="这是测试链接">
            <p class="mb-1">&copy; 2017-2022 Company Name</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
        </LegalInfo>
    </div>

</template>

<script>
/* eslint-disable */
import Footer from "../../components/Footer";
import LeftMainPart from "./LeftMainPart.vue";
import LegalInfo from "../../components/LegalInfo.vue";
import RightMainPart from "./RightLMainPart.vue";
// import { defineAsyncComponent } from 'vue'

export default {
    name: "Invoice",
    // components: {
    //     Footer:import("../../components/Footer"),
    //     LegalInfo:import("./LeftMainPart.vue"),
    //     // LeftMainPart:defineAsyncComponent(()=>{
    //     //     import ( "./LeftMainPart.vue")
    //     // }),
    //     LeftMainPart:import("./LeftMainPart.vue"),
    //     RightMainPart:import("./RightLMainPart.vue"),
    // },

    components: {
        Footer,
        LegalInfo,
        LeftMainPart,
        RightMainPart,
    },

    data() {
        return {
            httpResponse: {},
            httpFlag: false,
            invoice_id: undefined,
        };
    },

    // beforeCreate(){
    //     debugger;
    //     this.invoice_id = this.$route.params.invoice_id
    // },

    // async created() {
    //     console.log("invoice id 格式预检查:",this.invoice_id)
    //     this.invoice_id && await this.getData();
    // },

    //因为要看有没有传invoice_id进来, create这个生命周期在vue3中又不常用, 改用mounted和beforemount
    beforeMount() {
        // debugger;
        this.invoice_id = this.$route.params.invoice_id
    },

    async mounted() {
        console.log("invoice id 格式预检查:", this.invoice_id)
        this.invoice_id && await this.getData();
    },



    methods: {
        async getData() {
            console.log("获取数据方法触发了:invoice.index,vue")
            console.table(process.env)
            console.warn(process.env.VUE_APP_MOCK)
            let url;
            let isMock = eval(process.env.VUE_APP_MOCK)
            console.log(isMock)
            if (isMock) {
                url = "/api/invoice"                
            } else {
                url = `${process.env.VUE_APP_BASE_URL}/invoicing/${this.invoice_id}`;                
            }
            console.log(url)
            const httpResponse = await this.axios.get(url);
            this.httpResponse = httpResponse.data;
            this.httpFlag = true;

            const currencySymbolMap = this.getCurrencySymbolMap.call();

            this.httpResponse.currency_symbol = currencySymbolMap.get(
                _.get(this.httpResponse, "detail.currency_code")
            );

            this.httpResponse.format_due_amount = `${this.httpResponse.currency_symbol
                }${_.get(this.httpResponse, "due_amount.value")}`;

            this.httpResponse.format_minimum_amount = `${this.httpResponse.currency_symbol
                }${_.get(this.httpResponse, "configuration.partial_payment.minimum_amount_due.value")}`

            this.httpResponse.allow_partial_payment = _.get(this.httpResponse, "configuration.partial_payment.allow_partial_payment")

            // debugger;
            console.log("数据获取啦");
        },

        // getData() {
        //     this.axios.get("/api/invoice").then((res) => {
        //         debugger;
        //         this.httpResponse = res.data;
        //         console.log(this.httpResponse);
        //     });
        // },
    },
};
</script>
