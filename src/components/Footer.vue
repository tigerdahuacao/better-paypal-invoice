<template>
    <div :class="{ 'fixed-footer': fixed }">
        <div><slot>Footer Slot : 这是页脚</slot></div>
    </div>
</template>
<script>
export default {
    props: {
        fixed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style lang="less" scoped>
.fixed-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    // z-index: 1;
    background-color: blueviolet;
    height: 4rem;
    opacity: 80%;
    text-align: center;
    font-size: larger;
}
</style>
