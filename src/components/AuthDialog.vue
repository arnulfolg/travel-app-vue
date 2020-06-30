<template>
	<section
		class="auth-dialog"
		:class="dialogStatus ? 'auth-dialog__open' : 'auth-dialog__close'"
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
				</menu>
			</form>
		</section>
	</section>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"

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
	props: {
		title: {
			type: Boolean,
			required: false
		},
		openDialog: {
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
		dialogStatus() {
			return this.openDialog
		}
	},
	methods: {
		closeModal() {
			// this.$emit("close-dialog")
			this.auth.signOut()
		},
		logIn() {
			// debugger
			this.auth
				.signInWithEmailAndPassword(this.email, this.password)
				.then(cred => {
					console.log(cred.user)
					this.$emit("close-dialog")
				})
			// let email = this.email
			// let password = this.password
			// this.$emit("close-dialog")
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
