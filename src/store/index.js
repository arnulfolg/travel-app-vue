import { createStore } from "vuex"

const state = {
	count: 1,
	loggedIn: false,
	signInDialog: false
}

const mutations = {
	increment(state) {
		state.count++
	},
	changeLoggedStatus(state) {
		state.loggedIn = !state.loggedIn
	},
	openSignInDialog(state) {
		state.signInDialog = true
	},
	closeSignInDialog(state) {
		state.signInDialog = false
	}
}

export default createStore({
	state,
	mutations
})
