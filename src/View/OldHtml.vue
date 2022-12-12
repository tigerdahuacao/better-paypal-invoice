<template>
    <div class="container-lg bg-light card">
        <main>
            <div class="py-5">
                <h4>Invoice</h4>
            </div>

            <div class="row g-5">
                <div class="col-md-5 col-lg-3 order-md-last">
                    <h4
                        class="d-flex justify-content-between align-items-center mb-3"
                    >
                        <small class="">Balance due:</small>
                        <span class="">$74.21</span>
                    </h4>
                    <hr class="my-4" />

                    <h4>Payment options</h4>

                    <div class="form-check my-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Pay full amount - $74.21
                        </label>
                    </div>
                    <div class="form-check my-2">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Pay other amount (min. due $20.00)
                        </label>
                    </div>

                    <hr class="my-4" />

                    <div class="align-items-center">
                        <div id="paypal-button-container"></div>

                        <div
                            class="align-items-center"
                            style="text-align: center"
                        >
                            <a href="#">Cancel Invoice</a>
                        </div>

                        <img src="../assets/logo.png" />
                    </div>
                </div>

                <div class="col-md-7 col-lg-9">
                    <h4 class="mb-3">Billing address</h4>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">1234 First Street</div>
                        <small class="text-muted">帳單編號 0086</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">337673 Hillside Court</div>
                        <small class="text-muted">發出 : 2021年5月12日</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">Anytown, CA 98765</div>
                        <small class="text-muted">到期 : 2021年5月22日</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">
                            納稅人身份號碼： ABcNkWSfb5ICTt73nD3QON1fnnpgNKBy-
                            Jb5SeuGj185MNNw6g
                        </div>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between mb-3"
                    >
                        <div class="mb-1"></div>
                        <strong class="text-muted">$74.21</strong>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center mb-3"
                        style="background-color: #eaeced"
                    >
                        <div class="mb-1 mx-3 text-muted">+1 408-555-1234</div>
                        <span class="text-muted"> * </span>
                        <small class="text-muted mx-3">
                            albert.mjy-seller@outlook.com
                        </small>
                    </div>

                    <div class="d-flex w-100 align-items-center">
                        <div class="mb-1">Bill to</div>
                    </div>

                    <div class="d-flex w-100 align-items-center mb-5">
                        <small class="mb-1 text-muted"
                            >65************@qq.com
                        </small>
                    </div>

                    <div class="d-flex w-100 align-items-center">
                        <div class="mb-1">Items</div>
                    </div>

                    <div></div>

                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                            <div
                                class="d-flex w-100 align-items-center justify-content-between"
                            >
                                <strong class="mb-3">Yoga Mat </strong>
                                <strong class="">$50.00</strong>
                            </div>
                            <div
                                class="d-flex w-100 align-items-center justify-content-between"
                            >
                                <div class="mb-3 text-muted">
                                    1 x$50.00 | Sales Tax (7.25%)
                                </div>
                                <label class="badge bg-secondary rounded-pill"
                                    >5% OFF
                                </label>
                                <div class="text-muted">-$2.50</div>
                            </div>
                            <div
                                class="d-flex w-100 align-items-center justify-content-between"
                            >
                                <div class="mb-1 text-muted">
                                    {{}}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-body">
                            <div
                                class="d-flex w-100 align-items-center justify-content-between"
                            >
                                <strong class="mb-3">Yoga Mat </strong>
                                <strong class="">$10.00</strong>
                            </div>
                            <div
                                class="d-flex w-100 align-items-center justify-content-between"
                            >
                                <div class="mb-3 text-muted">
                                    1 x$50.00 | Sales Tax (7.25%)
                                </div>
                                <label class="badge bg-secondary rounded-pill"
                                    >$5.00 OFF
                                </label>
                                <div class="text-muted">-$5.00</div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Subtotal</div>
                        <small class="">$60.00</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Item discounts</div>
                        <small class="">-$7.50</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Other discount (5%)</div>
                        <small class="">-$2.63</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Shipping</div>
                        <small class="">$10.00</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Tax (Sales Tax 7.25%)</div>
                        <small class="">$4.34</small>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Packing Charges</div>
                        <small class="">$10.00</small>
                    </div>

                    <hr class="my-4" />

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <strong class="mb-1 text-muted">Total</strong>
                        <strong class="">$74.21</strong>
                    </div>

                    <hr class="my-4" />

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1"></div>
                        <div class="mb-1 text-muted">Minimum amount due</div>
                        <small class="">$20.00</small>
                    </div>

                    <hr class="my-4" />

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">Seller note to customer</div>
                    </div>

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <small class="mb-1 text-muted"
                            >Thank you for your business.</small
                        >
                    </div>

                    <hr class="my-4" />

                    <div
                        class="d-flex w-100 align-items-center justify-content-between"
                    >
                        <div class="mb-1">Reference deal-ref</div>
                    </div>

                    <hr class="my-4" />
                </div>
            </div>
        </main>

    </div>
</template>

<script>
    export default {
        name:'OldHtml'
    }
</script>

<style lang="less" scoped>


.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.1);
    border: solid rgba(0, 0, 0, 0.15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
        inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -0.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
</style>
<!-- <template>
    <div>
        <h5>Say Hello</h5>
    </div>
</template> -->
