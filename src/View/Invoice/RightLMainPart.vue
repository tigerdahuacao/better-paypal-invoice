<template>
    <div class="common-layout">
        <el-card>
            <el-main>
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <small class="">{{ $t("invoice.balance_due") }}:</small>
                    <span class="">{{ responseObj.format_due_amount }}</span>
                </h4>
                <el-divider />
                <el-radio-group v-model="radio_value">
                    <el-radio :label="0">{{ payment_option1 }}</el-radio>
                    <el-radio :label="1">{{ payment_option2 }}</el-radio>
                </el-radio-group>
            </el-main>
            <!-- <el-image :src="paypal_logo_url" /> -->
            <el-divider />
            <div class="align-items-center" style="text-align: center">
                <el-button type="primary" round @click="pay_btn_clicked">{{
                    $t("invoice.pay")
                }}</el-button>
                <el-button type="primary" round @click="cancel_btn_clicked">{{
                    $t("invoice.cancel_pay")
                }}</el-button>
            </div>
            <el-footer style="text-align: center"><img src="../../assets/logo.png" /></el-footer>
        </el-card>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "RightMainPart",
    props: {
        responseObj: {
            type: Object,
            // required: true,
        },
    },

    data() {
        return {
            paypal_logo_url: "/static/logo.png",
            payment_option1: this.$t("invoice.pay_full_amount"),
            payment_option2: this.$t("invoice.pay_other_amount"),
            radio_value: ref(0),
            // payment_option1_value:"",
            // payment_option2_value:""
        };
    },

    mounted() {
        this.payment_option1 = `${this.payment_option1} - ${this.responseObj.format_due_amount}`;
        //TODO
        this.payment_option2 = this.payment_option2.replace(
            "__replace1__",
            "min due"
        );
        this.payment_option2 = this.payment_option2.replace(
            "__replace2__",
            this.responseObj.format_minimum_amount
        );
    },

    methods: {
        //不要使用箭头函数, 否则 this为undefined
        // pay_btn_clicked: () => {
        //     debugger;
        //     const invoice_id = this.$route.params.invoice_id
        //     console.log("pay button clicked invoice ID:", invoice_id );
        //     const url = `${process.env.VUE_APP_BASE_URL}/invoicing/${invoice_id}/send`;
        //     this.axios.post(url);
        // },

        pay_btn_clicked () {
            debugger;
            const invoice_id = this.$route.params.invoice_id
            console.log("pay button clicked invoice ID:", invoice_id );
            const url = `${process.env.VUE_APP_BASE_URL}/invoicing/${invoice_id}/send`;
            this.axios.post(url);
        },

        cancel_btn_clicked: () => {
            console.log("pay button clicked")
        }
    }
};
</script>

<style>

</style>
