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
			<CategoryCard v-for="i in 7" :key="i"></CategoryCard>
		</section>
	</main>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue"

export default {
	name: "App",
	components: {
		CategoryCard
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
