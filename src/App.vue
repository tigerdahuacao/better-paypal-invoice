<template>
    <div class="title " >
        <el-card shadow="hover" style="float: left;">
            <router-link to="/invoice">Invoice</router-link>
        </el-card>

        <el-card shadow="hover" style="float: right;">
            <router-link to="/oldHtml">OldHtml</router-link>
        </el-card>
    </div>
    <router-view ></router-view>
    <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Footer,
    },
};
</script>

<style>
.title {
    text-align: center;
    margin: auto 0px;
    vertical-align: middle;
}
</style>
