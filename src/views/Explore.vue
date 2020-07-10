<template>
	<main class="main explore">
		<section class="explore_titles">
			<h2>Explore places</h2>
		</section>
		<section class="explore_list">
			<PlaceCard
				v-for="item in places"
				:key="item.place"
				:title="item.place"
				:categories="item.categories"
				:image="item.image"
			></PlaceCard>
			<EmptyError v-if="places.length == 0" />
		</section>
	</main>
</template>

<script>
import { useStore } from "vuex"

import PlaceCard from "@/components/PlaceCard.vue"
import EmptyError from "@/components/EmptyError.vue"

export default {
	name: "Explore",
	async setup() {
		const store = useStore()

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		const getPlaces_url = store.state.API_URL + "getPlaces"

		let response = await fetch(getPlaces_url, requestOptions)
		let places = await response.json()
		return { places }
	},
	components: {
		PlaceCard,
		EmptyError
	}
}
</script>

<style lang="scss">
.explore {
	display: grid;
	grid-gap: 32px;
	align-items: stretch;
	justify-items: stretch;
}

.explore .explore_list {
	display: grid;
	grid-template-columns: repeat(3, minmax(auto, 1fr));
	grid-auto-rows: auto;
	grid-gap: 40px;
}
</style>
