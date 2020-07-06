import { createStore } from "vuex"

const state = {
	loggedIn: false,
	signInDialog: false,
	userData: {
		name: "",
		email: ""
	}
}

const mutations = {
	changeLoggedStatus(state, newStatus) {
		state.loggedIn = newStatus
	},
	openSignInDialog(state) {
		state.signInDialog = true
		document.body.style.overflow = "hidden"
	},
	closeSignInDialog(state) {
		state.signInDialog = false
		document.body.style.overflow = "visible"
	},
	setUserData(state, email) {
		state.userData.email = email
	}
}

export default createStore({
	state,
	mutations
})
