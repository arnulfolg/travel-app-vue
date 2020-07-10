<template>
	<main class="main dashboard">
		<section class="dashboard_explore">
			<section class="card">
				<h3>My Places</h3>
				<p>Look at the places you have been and the places you want to meet</p>
				<router-link to="/myplaces">See more</router-link>
			</section>
			<section class="card">
				<h3>Categories</h3>
				<p>
					Browse our places categories, perfect if you want to make a long trip
				</p>
				<router-link to="/categories">See more</router-link>
			</section>
		</section>
		<section class="dashboard_featured">
			<h2>Featured Places</h2>
			<section class="places">
				<PlaceCard
					v-for="item in featuredPlaces"
					:key="item.place"
					:title="item.place"
					:categories="item.categories"
					:image="item.image"
				></PlaceCard>
				<EmptyError v-if="featuredPlaces.length == 0" />
			</section>
		</section>
	</main>
</template>

<script>
import { useStore } from "vuex"

import PlaceCard from "@/components/PlaceCard.vue"
import EmptyError from "@/components/EmptyError.vue"

export default {
	name: "Home",
	setup() {
		const store = useStore()

		return { store }
	},
	data() {
		return {
			featuredPlaces: []
		}
	},
	components: {
		PlaceCard,
		EmptyError
	},
	async mounted() {
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		const getFeaturedPlaces_url = this.store.state.API_URL + "getFeaturedPlaces"

		let response = await fetch(getFeaturedPlaces_url, requestOptions)
		this.featuredPlaces = await response.json()
	}
}
</script>

<style lang="scss">
.dashboard {
	display: grid;
	grid-gap: 50px;
	align-items: stretch;
	justify-items: stretch;

	.card {
		background-color: var(--color-white);
		box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
		padding: 40px;
	}

	.dashboard_explore {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 40px;
		align-items: stretch;
		justify-items: stretch;
	}

	.dashboard_featured .places {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: auto;
		grid-gap: 40px;
	}
}
</style>
