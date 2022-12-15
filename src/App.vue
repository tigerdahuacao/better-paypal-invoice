<template>
    <router-view></router-view>

    <Footer :fixed="true">
        <div class="button_box">
            <div class="mb-1 button_set">
                <router-link to="/invoice" style="text-decoration: none;">Invoice</router-link>
            </div>
            <div class="mb-1 button_set">
            <router-link to="/oldHtml" style="text-decoration: none;">OldHtml</router-link>
            </div>
        </div></Footer
    >
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
.button_box {
    text-align: left;
    margin-left: 3rem;
    display:flex
}

.button_set {
    width: 100px;
    height: 30px;
    border-radius: 20px;
    text-align: center;
    background-color: white;
    margin: 1rem;
    
}
</style>
