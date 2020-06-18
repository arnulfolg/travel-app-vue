<template>
	<section class="category">
		<section class="category_titles">
			<img src="@/assets/category_pueblo_magico.png" alt="" />
			<h2>Category</h2>
			<p>
				Category define what kind of place you are visiting. It stablishes a
				relationship between places so you can plan accordingly.
			</p>
		</section>
		<section class="category_list">
			<PlaceCard v-for="i in 7" :key="i"></PlaceCard>
		</section>
	</section>
</template>

<script>
import PlaceCard from "@/components/PlaceCard.vue"

export default {
	name: "App",
	components: {
		PlaceCard
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
