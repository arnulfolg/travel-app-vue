import { createStore } from "vuex"

const state = {
	loggedIn: false,
	signInDialog: false,
	userData: {
		uid: "",
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
	setUserData(state, user) {
		state.userData.uid = user.uid
		state.userData.email = user.email
	}
}

export default createStore({
	state,
	mutations
})
