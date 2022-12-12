<template>
    <div class="footer" :class="{ 'fixed-footer': fixed }">这是页脚</div>
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
    height: 3rem;
    opacity: 40%;

    font-size: larger;
}

.footer {
    background-color: blueviolet;
    text-align: center;
    font-size: 0.26667rem;
    margin: 30px 0;
    .copyright {
        a {
            color: inherit;
        }
    }
}
</style>
