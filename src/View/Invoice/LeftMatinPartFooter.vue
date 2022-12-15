<template>
    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{ $t("invoice.min_amount_due") }}</div>
        <small class="">{{ obj.due_amount }}</small>
    </div>

    <el-divider />

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1">{{ $t("invoice.note") }}</div>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <small class="mb-1 text-muted">{{ obj.note }}</small>
    </div>

    <el-divider />

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1">{{ $t("invoice.deal_ref") }} {{ obj.reference }}</div>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object,
            default: {},
        },
    },

    mounted() {},

    methods() {},
};
</script>

<style></style>
