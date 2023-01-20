<template>
    <div class="common-layout">
        <el-card>
            <!-- <el-header></el-header> -->
            <el-main
                ><BillingAddress
                    :invoicer="responseObj.invoicer"
                    :invoice_id="responseObj.id"
                    :invoice_date="invoice_date"
                    :due_date="due_date"
                />

                <ContactInfo
                    :contact_email_addr_1="contact_email_addr_1"
                    :contact_email_addr_2="contact_email_addr_2"
                    :contact_phone_number="contact_phone_number"
                />

               
                <ItemListAndTotalArea v-if="itemList.length > 0" :itemsToDisplay="itemList" :amount="responseObj.amount"></ItemListAndTotalArea>
            </el-main>
            <el-divider />
                <LeftMatinPartFooter v-if="footer_obj.isInit" :obj="footer_obj"/>

        </el-card>
    </div>
</template>

<script setup>
// import BillingAddress from "./BillingAddress.vue";
// const props = defineProps(["responseObj"]);
</script>

<script>
import BillingAddress from "./BillingAddress.vue";
import ContactInfo from "./ContactInfo.vue";
import ItemListAndTotalArea from "./ItemListAndTotalArea.vue";
import LeftMatinPartFooter from "./LeftMatinPartFooter.vue";

export default {
    name: "LeftMainPart",
    props: {
        responseObj: {
            type: Object,
            default:{}
            // required: true,
        },
        // invoice_date: String,
        // due_date: String,
    },

    //为什么这里不注册也能使用?
    // components:{
    //     BillingAddress,
    //     ContactInfo,
    //     Item,
    // },

    data() {
        return {
            invoice_date: "",
            due_date: "",
            contact_email_addr_1: "",
            contact_email_addr_2: "",
            contact_phone_number: "",
            itemList: [],
            footer_obj:{
                isInit:false
            }
        };
    },

    // watch: {
    //     httpData(newData, oldData) {
    //         this.invoice_date = _.get(
    //             this.responseObj,
    //             "detail.invoice_date",
    //             "0000-00-00"
    //         );
    //         this.due_date = _.get(
    //             this.responseObj,
    //             "detail.payment_term.due_date",
    //             "0000-00-00"
    //         );
    //     },
    // },

    mounted() {
        // console.log(this.responseObj)
        this.invoice_date = _.get(
            this.responseObj,
            "detail.invoice_date",
            "0000-00-00"
        );
        this.due_date = _.get(
            this.responseObj,
            "detail.payment_term.due_date",
            "0000-00-00"
        );

        this.contact_email_addr_1 = _.get(
            this.responseObj,
            "invoicer.email_address"
        );
        this.contact_email_addr_2 = _.get(
            this.responseObj,
            "primary_recipients[0].billing_info.email_address"
        );
        this.contact_phone_number = _.get(
            this.responseObj,
            "invoicer.phones[0].national_number"
        );
        // debugger;
        this.itemList = _.get(this.responseObj, "items");
        // console.log(_.get(this.responseObj, "items"))

        this.footer_obj = {
            isInit:true,
            due_amount:_.get(this.responseObj, "format_due_amount"),
            note:_.get(this.responseObj,"detail.note"),
            reference:_.get(this.responseObj,"detail.reference"),
        }

        // debugger;
    },
};
</script>

<style></style>
