<template>
    <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-body">
            <div
                class="d-flex w-100 align-items-center justify-content-between"
            >
                <strong class="mb-3">{{ item.name }}</strong>
                <strong class="">{{item.unit_amount}}</strong>
            </div>
            <div
                class="d-flex w-100 align-items-center justify-content-between"
            >
                <div class="mb-3 text-muted">{{item.quantity}} x {{item.unit_amount}} | {{item.tax_display}}</div>
                <label class="badge bg-secondary rounded-pill">5% OFF </label>
                <div class="text-muted">{{item.tax_amount}}</div>
            </div>
            <div
                class="d-flex w-100 align-items-center justify-content-between"
            >
                <div class="mb-1 text-muted">{{item.description}}</div>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
const props = defineProps(["item"]);
</script> -->

<script>

export default {
    props: {
        item: {
            type: Object,
            default: {},
        },
    },

    // data(){
    //     return{
    //         unit_amount:"",
    //         tax:"",
    //         tax_amount:"",
    //         discount:""
    //     }
    // },
    mounted() {
        
    },

    methods() {},
};
</script>

<style></style>
