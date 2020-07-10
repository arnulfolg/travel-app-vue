<template>
	<main class="main myplaces">
		<h2>My places</h2>
		<p>
			A list of all the places you have visited and the places you want to
			visit.
		</p>
		<section class="myplaces_list">
			<PlaceCard
				v-for="item in userPlaces"
				:key="item.place"
				:title="item.place"
				:categories="item.categories"
				:image="item.image"
			></PlaceCard>
			<EmptyError v-if="userPlaces.length == 0" />
		</section>
	</main>
</template>

<script>
import { useStore } from "vuex"
import PlaceCard from "@/components/PlaceCard.vue"
import EmptyError from "@/components/EmptyError.vue"

export default {
	name: "My Place",
	setup() {
		const store = useStore()
		const userPlaces = []

		return { store, userPlaces }
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

		const getMyPlaces_url =
			this.store.state.API_URL +
			"getMyPlaces?uid=" +
			this.store.state.userData.uid

		let getUserPlaces = await fetch(getMyPlaces_url, requestOptions)
		this.userPlaces = await getUserPlaces.json()
	}
}
</script>

<style lang="scss">
.myplaces .myplaces_list {
	display: grid;
	grid-template-columns: repeat(3, minmax(auto, 1fr));
	grid-auto-rows: auto;
	grid-gap: 40px;
}
</style>
