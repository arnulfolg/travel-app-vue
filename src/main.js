import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import firebase from "firebase/app"
import "firebase/auth"

// Vue.prototype.$firebase = firebase

createApp(App)
	.use(router)
	.use(store)
	.use(firebase)
	.mount("#app")
