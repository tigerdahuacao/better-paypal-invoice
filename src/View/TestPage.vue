<template>
    <div style="display: flex;flex-direction: row;">
        <div class="page-header" style="padding: 3rem; ">
            <div class="input-group">
                <input type="text" v-model="invoice_id" placeholder="Please input Invoice id" class="form-control" />
                <div class="input-group-btn">
                    <button class="btn btn-danger" @click="go_invoice">GO</button>
                </div>
            </div>

            <div class="input-group-btn" style="margin: 3rem;">
                <button class="btn btn-info  btn-lg   " @click="postMessage">Test POST</button>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
    name: "TestPage",
    data() {
        return {
            invoice_id: ""
        }
    },

    methods: {
        go_invoice() {
            // alert(this.invoice_id)
            this.$router.push({
                path: "/invoice/" + this.invoice_id
            })
        },
        postMessage(){
            if (!this.invoice_id)
                return
            const url  = `${process.env.VUE_APP_BASE_URL}/invoicing/${this.invoice_id}/send`;
            this.axios.post(url);
        }
    }
}
</script>