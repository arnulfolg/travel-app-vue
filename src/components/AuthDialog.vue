<template>
	<section
		class="auth-dialog"
		:class="
			store.state.signInDialog ? 'auth-dialog__open' : 'auth-dialog__close'
		"
	>
		<section>
			<form method="dialog">
				<h2>Sign In</h2>
				<label for="user-name">Username:</label>
				<input
					id="user-name"
					type="email"
					v-model="email"
					placeholder="Email"
				/>
				<label for="user-pass">Password:</label>
				<input
					id="user-pass"
					type="password"
					v-model="password"
					placeholder="Password"
				/>
				<menu>
					<button value="cancel" @click.prevent="closeModal">Cancel</button>
					<button value="submit" @click.prevent="logIn">Confirm</button>
					<p>{{ sesionStatus }}</p>
				</menu>
			</form>
		</section>
	</section>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import { useStore } from "vuex"

firebase.initializeApp({
	apiKey: "AIzaSyCx-qm6ofRIZKBGl3Wyd4KrQ5wYADYDljU",
	authDomain: "travel-app-9b55f.firebaseapp.com",
	databaseURL: "https://travel-app-9b55f.firebaseio.com",
	projectId: "travel-app-9b55f",
	storageBucket: "travel-app-9b55f.appspot.com",
	messagingSenderId: "772484090151",
	appId: "1:772484090151:web:74e01e5fd9a0ac3ba60102",
	measurementId: "G-7Z0C19GNB0"
})

const auth = firebase.auth()

export default {
	setup() {
		const store = useStore()

		return { store }
	},
	props: {
		signOut: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			auth,
			email: "",
			password: ""
		}
	},
	computed: {
		sesionStatus() {
			this.logOut()
			return this.signOut
		}
	},
	methods: {
		logOut() {
			this.auth.signOut()
			this.store.commit("closeSignInDialog")
			this.store.commit("changeLoggedStatus")
		},
		closeModal() {
			this.store.commit("closeSignInDialog")
		},
		logIn() {
			debugger
			this.auth
				.signInWithEmailAndPassword(this.email, this.password)
				.then(cred => {
					debugger
					console.log(cred.user)
					this.store.commit("changeLoggedStatus")
					this.store.commit("closeSignInDialog")
				})
		}
	}
}
</script>

<style lang="scss">
.auth-dialog {
	background-color: var(--modal-bgc);
	height: 100vh;
	z-index: 1000;
	position: sticky;

	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: center;
	align-items: center;

	form {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-content: center;
		align-items: flex-start;

		label {
			margin-bottom: 0;
		}

		input {
			margin-bottom: 24px;
			height: 42px;
			width: 300px;
		}
	}

	&__close {
		display: none;
	}
}
</style>
