<template>
    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.subtotal")}}</div>
        <small class="">{{subtotal_area.total_value}}</small>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.item_discount")}}</div>
        <small class="">{{subtotal_area.item_discount_value}}</small>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.other_discount")}} ({{subtotal_area.invoice_discount_rate}}%)</div>
        <small class="">{{subtotal_area.invoice_discount}}</small>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.shipping_fee")}}</div>
        <small class="">{{subtotal_area.shipping_amount}}</small>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.tax_fee")}} ({{$t("invoice.tax_rate")}} {{subtotal_area.tax_rate}}%)</div>
        <small class="">{{subtotal_area.tax_total}}</small>
    </div>

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <div class="mb-1 text-muted">{{$t("invoice.packing_charge")}}</div>
        <small class="">{{subtotal_area.packing_charge}}</small>
    </div>
    
    <el-divider />

    <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="mb-1"></div>
        <strong class="mb-1 text-muted">{{$t("invoice.sumtotal")}}</strong>
        <strong class="">{{subtotal_area.total}}</strong>
    </div>

    

</template>

<!-- <script setup>
const props = defineProps(["item"]);
</script> -->

<script>
export default {
    props: {
        subtotal_area: {
            type: Object,
            default: {},
        },
    },

    // data(){
    //     return{
    //         subtotal_area:{}
    //     }
    // },
    mounted() {
        // this.subtotal_area = this.subtotal_area_obj
        // console.log(this.subtotal_area.packing_charge)
        // debugger;
    },

    methods() {},
};
</script>

<style></style>
