<template>
    <div>
        <ul style="list-style: none">
            <li v-for="item in items">
                <Item :item="item"></Item>
            </li>
        </ul>
    </div>
</template>

<script>
import Item from "./Item.vue";
import { getCurrentInstance } from "vue";
export default {
    props: {
        itemsToDisplay: {
            type: Array,
            default: [],
        },
    },

    components: {
        Item,
    },

    data() {
        return {
            items: [],
            subtotal_amount:0,
            item_discounts:0,
            
        };
    },
    mounted() {
      

        let subtotal;

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
        //   debugger
        this.items = this.itemsToDisplay;
        // console.log(this.itemsToDisplay);
    },
};
</script>
