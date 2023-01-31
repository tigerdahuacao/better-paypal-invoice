<template>
    <div style="display: flex;flex-direction: row;">
        <div class="page-header" style="padding: 3rem; ">
            <div class="input-group">
                <input type="text" v-model="invoice_id" placeholder="Please input Invoice id" class="form-control" />
                <div class="input-group-btn">
                    <button class="btn btn-danger" @click="go_invoice">GO</button>
                </div>

            </div>
            <div class="input-group">
                <div class="mb-1 button_set_1">
                    切换url
                    <el-switch v-model="value2" ref="testSwitch" class="ml-2" @change="change"
                        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="NetWork"
                        inactive-text="Localhost" />
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
            invoice_id: "1",
            value2: true
        }
    },

    methods: {
        go_invoice() {
            // alert(this.invoice_id)
            const globalVariable = this.globalVariable;
            globalVariable.useLocalURl = !this.$refs.testSwitch.checked;
            // debugger;
            console.clear();
            this.$router.push({
                path: "/invoice/" + this.invoice_id
            })
        },
        postMessage() {
            if (!this.invoice_id)
                return
            const url = `${process.env.VUE_APP_BASE_URL}/invoicing/${this.invoice_id}/send`;
            this.axios.post(url);
        },
        change() {
            // console.log(this.$refs.testSwitch.checked)
            const globalVariable = this.globalVariable;
            globalVariable.useLocalURl = !this.$refs.testSwitch.checked;
            console.log(globalVariable)
        }
    }
}
</script>

<style>

.button_set_1 {
    padding: 0.4rem;
    width: auto;
    height: auto;
    border-radius: 20px;
    text-align: center;
    background-color: rgb(192, 239, 152);
    margin: 1rem;

}
</style>