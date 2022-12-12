<template>
    <div
        class="container-lg   my-5 pt-5 text-muted text-center text-small"
    >
        <a target="_blank" :href="href">{{ legalInfo }}</a>
        <div><slot>Default Value</slot></div>
    </div>
</template>

<script>
export default {
    props: {
        href: String,
        legalInfo: String,
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="less">
// @import "../css/bootstrap.min.css";
</style>
