<template>
	<header class="travel_header">
		<section>
			<router-link to="/">
				<img src="@/assets/logo.svg" alt="Travel App" />
			</router-link>
		</section>

		<nav class="header_navigation">
			<ul>
				<li>
					<router-link class="header_link" to="/places">Explore</router-link>
				</li>
				<li>
					<router-link class="header_link" to="/categories">
						Categories
					</router-link>
				</li>
			</ul>
		</nav>
		<section>
			<router-link
				class="header_link"
				v-if="store.state.loggedIn"
				to=""
				@click.prevent="logIn"
			>
				<i class="fas fa-sign-in-alt"></i>
				Sign In
			</router-link>
			<router-link
				class="header_link"
				v-if="!store.state.loggedIn"
				to=""
				@click.prevent="logOut"
			>
				<i class="fas fa-sign-out-alt"></i>
				Sign Out
			</router-link>
		</section>
	</header>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "vue"
import { emitter } from "./../store/eventbus"

export default {
	setup() {
		const store = useStore()
		const count = computed(() => store.state.count)

		return { count, store }
	},
	methods: {
		logIn() {
			emitter.emit("signin")
			// store.commit("openSignInDialog")
		},
		logOut() {
			emitter.emit("signout")
			// this.store.commit("changeLoggedStatus")
		}
	}
}
</script>

<style lang="scss">
header.travel_header {
	height: 100px;
	background-color: var(--main-app-color);
	position: static;
	z-index: 100;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	padding: 40px;

	.header_link {
		color: var(--color-white);
		font-weight: 300;
		text-decoration: none;

		&.router-link-active {
			font-weight: 600;
			text-decoration: initial;
		}
	}
}

.header_navigation ul {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	padding: 40px;

	li {
		margin: 0 14px;
	}
}
</style>
