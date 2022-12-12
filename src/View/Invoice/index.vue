<template>
    <div class="container-lg bg-light card">
        <div class="py-5">
            <h5>
                <b>{{ $t("invoice.invoice_title") }}</b>
            </h5>
        </div>
        <el-container>
            <el-main
                ><LeftMainPart
                    v-if="httpFlag && httpResponse"
                    :responseObj="httpResponse"
                ></LeftMainPart
            ></el-main>
            <el-aside width="30%"><RightMainPart></RightMainPart></el-aside>
        </el-container>
        <!-- <button @click="getData">搜索</button> -->
        <LegalInfo href="https://www.bing.com" legalInfo="这是测试链接">
            <p class="mb-1">&copy; 2017-2022 Company Name</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Support</a></li>
            </ul></LegalInfo
        >
    </div>

    <Footer :fixed="true"></Footer>
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
        };
    },

    async created() {
        await this.getData();
    },

    // onMounted() {
    //     this.getData();
    // },

    methods: {
        async getData() {
            const httpResponse = await this.axios.get("/api/invoice");
            this.httpResponse = httpResponse.data;
            this.httpFlag = true;
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
