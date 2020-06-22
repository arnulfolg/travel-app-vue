<template>
	<main class="main categories">
		<section class="categories_titles">
			<h2>Categories</h2>
			<p>
				Categories define what kind of place you are visiting. It stablishes a
				relationship between places so you can plan accordingly.
			</p>
		</section>
		<section class="categories_list">
			<CategoryCard
				v-for="category in categories"
				:key="category.name"
				:title="category.name"
				:num="category.numPlaces"
			></CategoryCard>
			<EmptyError v-if="categories.length == 0" />
		</section>
	</main>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue"
import EmptyError from "@/components/EmptyError.vue"

export default {
	name: "App",
	async setup() {
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		let response = await fetch(
			"http://localhost:5001/travel-app-9b55f/us-central1/getTags",
			requestOptions
		)
		let categories = await response.json()
		return { categories }
	},
	components: {
		CategoryCard,
		EmptyError
	}
}
</script>

<style lang="scss">
.categories {
	display: grid;
	grid-gap: 32px;
	align-items: stretch;
	justify-items: stretch;
}

.categories .categories_list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 60px 80px;
}
</style>
