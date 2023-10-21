import Vue from "vue"

// @ts-ignore
import App from "./app/App.vue"

Vue.config.productionTip = false

export const app = new Vue({
    el: "#app",
    render: h => h(App),
})
