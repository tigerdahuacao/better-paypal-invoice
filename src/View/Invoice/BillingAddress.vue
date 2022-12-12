<template>
    <div class="common-layout">
        <h4 class="mb-3">{{$t("invoice.bill_address")}}</h4>

        <div class="d-flex w-100 align-items-center justify-content-between">
            <div class="mb-1">{{invoicer.address.address_line_1}}</div>
            <small class="text-muted">{{$t("invoice.invoice_number")}}  {{invoice_id}}</small>
        </div>

        <div class="d-flex w-100 align-items-center justify-content-between">
            <div class="mb-1">{{invoicer.address.address_line_2}}</div>
            <small class="text-muted">{{$t("invoice.invoice_date")}} : {{invoice_date}}</small>
        </div>

        <div class="d-flex w-100 align-items-center justify-content-between">
            <div class="mb-1">{{invoicer.address.admin_area_2}}, {{invoicer.address.admin_area_1}}  {{invoicer.address.postal_code}}</div>
            <small class="text-muted">{{$t("invoice.due_date")}} : {{due_date}}</small>
        </div>

        <div class="d-flex w-100 align-items-center justify-content-between">
            <div class="mb-1">
                {{$t("invoice.tax_id")}}: {{invoicer.tax_id}}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["invoicer",'invoice_date','due_date', 'invoice_id']);
</script>

<style></style>
