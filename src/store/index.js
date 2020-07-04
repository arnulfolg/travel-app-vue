import { createStore } from "vuex"

const state = {
	loggedIn: false,
	signInDialog: false
}

const mutations = {
	changeLoggedStatus(state) {
		state.loggedIn = !state.loggedIn
	},
	openSignInDialog(state) {
		state.signInDialog = true
		document.body.style.overflow = "hidden"
	},
	closeSignInDialog(state) {
		state.signInDialog = false
		document.body.style.overflow = "visible"
	}
}

export default createStore({
	state,
	mutations
})
