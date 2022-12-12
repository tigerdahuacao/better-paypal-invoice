<template>
    <div
        class="d-flex w-100 align-items-center mb-3"
        style="background-color: #eaeced"
    >
        <div class="mb-1 mx-3 text-muted" style="float: left;">{{ contact_phone_number }}</div>
        <span class="text-muted"> * </span>
        <small class="text-muted mx-3" style="float: right;">
            {{ contact_email_addr_1 }}
        </small>
    </div>

    <div class="d-flex w-100 align-items-center">
        <div class="mb-1">{{ $t("invoice.bill_to") }}</div>
    </div>

    <div class="d-flex w-100 align-items-center mb-5">
        <small class="mb-1 text-muted">{{ contact_email_addr_2 }} </small>
    </div>
</template>

<script setup>
const props = defineProps([
    "contact_phone_number",
    "contact_email_addr_1",
    "contact_email_addr_2",
]);
</script>

<style></style>
