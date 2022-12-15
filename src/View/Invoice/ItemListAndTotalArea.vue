<template>
    <div>
        <ul style="list-style: none">
            <li v-for="item in items">
                <Item :item="item"></Item>
            </li>
        </ul>
        <el-divider />
        <TotalArea
            v-if="subtotal_area_obj.isInit"
            :subtotal_area="subtotal_area_obj"
        />
    </div>
</template>

<script>
import Item from "./Item.vue";
import { getCurrentInstance } from "vue";
import TotalArea from "./TotalArea.vue";
export default {
    props: {
        itemsToDisplay: {
            type: Array,
            default: [],
        },
        amount: {
            type: Object,
        },
    },

    components: {
        Item,
        TotalArea,
    },

    data() {
        return {
            items: [],
            subtotal_amount: 0,
            item_discounts: 0,
            subtotal_area_obj: {
                isInit: false,
            },
        };
    },
    mounted() {
        const internalInstance = getCurrentInstance();
        const currencySymbolMap =
            internalInstance.appContext.config.globalProperties.getCurrencySymbolMap.call();
        // debugger;

        this.itemsToDisplay.forEach((item) => {
            item.unit_amount = `${currencySymbolMap.get(
                _.get(item, "unit_amount.currency_code")
            )}${_.get(item, "unit_amount.value")}`;

            item.tax_display = `${_.get(item, "tax.name")}(${_.get(
                item,
                "tax.percent"
            )})`;

            item.tax_amount = `-${currencySymbolMap.get(
                _.get(item, "tax.amount.currency_code")
            )}${_.get(item, "tax.amount.value")}`;
        });
        this.items = this.itemsToDisplay;
        //   debugger

        let that = this;
        function formatAmount(vString) {
            const value = _.get(that.amount, vString);
            const symbol = currencySymbolMap.get(that.amount.currency_code);
            // debugger;
            if (value.startsWith("-")) {
                return `-${symbol}${value.split("-")[1]}`;
            }
            return `-${symbol}${value}`;
        }

        this.subtotal_area_obj = {
            isInit: true,
            total_value: formatAmount("breakdown.item_total.value"),
            item_discount_value: formatAmount(
                "breakdown.discount.item_discount.value"
            ),
            invoice_discount: formatAmount(
                "breakdown.discount.invoice_discount.amount.value"
            ),
            invoice_discount_rate: formatAmount(
                "breakdown.discount.invoice_discount.percent"
            ),
            shipping_amount: formatAmount("breakdown.shipping.amount.value"),
            tax_rate: formatAmount("breakdown.shipping.tax.percent"),
            tax_total: formatAmount("breakdown.tax_total.value"),
            packing_charge: formatAmount("breakdown.custom.amount.value"),
            total: `${currencySymbolMap.get(that.amount.currency_code)}${this.amount.value}`,
        };
    },

    methods() {},
};
</script>
