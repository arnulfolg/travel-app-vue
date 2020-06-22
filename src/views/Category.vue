<template>
	<main class="main category">
		<section class="category_titles">
			<img src="@/assets/category_pueblo_magico.png" alt="" />
			<h2>{{ categoryName.name }}</h2>
			<p>
				Category define what kind of place you are visiting. It stablishes a
				relationship between places so you can plan accordingly.
			</p>
		</section>
		<section class="category_list">
			<PlaceCard
				v-for="place in category"
				:key="place.place"
				:title="place.place"
				:categories="place.categories"
				:image="place.image"
			></PlaceCard>
			<EmptyError v-if="category.length == 0" />
		</section>
	</main>
</template>

<script>
import PlaceCard from "@/components/PlaceCard.vue"
import EmptyError from "@/components/EmptyError.vue"

export default {
	name: "App",
	data() {
		return {
			category: [],
			categoryName: {}
		}
	},
	components: {
		PlaceCard,
		EmptyError
	},
	async mounted() {
		let categorySelected = this.$route.params.category
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		let placesResponse = await fetch(
			"http://localhost:5001/travel-app-9b55f/us-central1/getTagPlaces?tag=" +
				categorySelected +
				"",
			requestOptions
		)
		this.category = await placesResponse.json()

		let tagResponse = await fetch(
			"http://localhost:5001/travel-app-9b55f/us-central1/getTag?tag=" +
				categorySelected +
				"",
			requestOptions
		)
		this.categoryName = await tagResponse.json()
	}
}
</script>

<style lang="scss">
.category {
	display: grid;

	grid-gap: 32px;
	align-items: stretch;
	justify-items: stretch;

	.category_titles {
		display: grid;
		grid-template-columns: 140px 1fr;
		grid-template-rows: repeat(2, 70px);
		grid-template-areas:
			"category_titles__img category_titles__title"
			"category_titles__img category_titles__description";
		grid-gap: 0 10px;
		align-items: stretch;
		justify-items: stretch;

		img {
			grid-area: category_titles__img;
		}

		h2 {
			grid-area: category_titles__title;
		}

		p {
			grid-area: category_titles__description;
		}
	}
}

.category .category_list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	grid-gap: 40px;
}
</style>
