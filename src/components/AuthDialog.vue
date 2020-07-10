<template>
	<section class="auth-dialog">
		<form method="dialog">
			<section class="dialog_header">
				<h2>Sign In</h2>
			</section>
			<section class="dialog_content">
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
			</section>
			<section class="dialog_actions">
				<button value="cancel" @click.prevent="closeModal">Cancel</button>
				<button class="cta" value="submit" @click.prevent="logIn">
					Confirm
				</button>
			</section>
		</form>
	</section>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import { useStore } from "vuex"
import { emitter } from "./../store/eventbus"

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
	methods: {
		logOut() {
			this.auth.signOut()
			this.store.commit("closeSignInDialog")
		},
		closeModal() {
			this.store.commit("closeSignInDialog")
		},
		openModal() {
			this.store.commit("openSignInDialog")
		},
		logIn() {
			this.auth
				.signInWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.store.commit("closeSignInDialog")
				})
				.catch(err => {
					if (err.code == "auth/wrong-password") {
						console.log(err)
					} else {
						this.store.commit("closeSignInDialog")
					}
				})
		}
	},
	created() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.store.commit("changeLoggedStatus", true)
				this.store.commit("setUserData", user)
			} else {
				this.store.commit("changeLoggedStatus", false)
				this.store.commit("setUserData", "")
			}
		})

		emitter.on("signin", () => {
			this.openModal()
		})
		emitter.on("signout", () => {
			this.logOut()
		})
	}
}
</script>

<style lang="scss">
.auth-dialog {
	width: 40%;
	height: 40%;
	background-color: var(--color-white);
	border-radius: 8px;

	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-content: center;
	align-items: stretch;

	form {
		padding: 24px;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-content: stretch;
		align-items: stretch;

		label {
			margin-bottom: 0;
		}

		input {
			margin-bottom: 24px;
			height: 42px;
			width: 100%;
			border: 1px solid #363636;
			border-radius: 4px;

			&:focus {
				border: 2px solid #363636;
			}
		}

		.dialog_content {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-content: stretch;
			align-items: stretch;
		}

		.dialog_actions {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between;
			align-content: stretch;
			align-items: stretch;

			button {
				height: 45px;
				padding: 0 20px;
				margin-bottom: 0;
				background-color: #fff;
				border: 1px solid #363636;
				border-radius: 4px;
				color: #363636;
				cursor: pointer;
				box-shadow: none;

				&.cta {
					background-color: var(--main-app-color);
					border: 1px solid var(--main-app-color);
					color: #fff;

					&:hover {
						background-color: #258057;
						border-color: #258057;
						color: #fff;
					}
				}

				&:hover {
					background-color: #363636;
					color: #fff;
				}
			}
		}
	}
}
</style>
