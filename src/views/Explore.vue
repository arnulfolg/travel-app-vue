<template>
	<main class="main explore">
		<section class="explore_titles">
			<h2>Explore places</h2>
		</section>
		<section class="explore_list">
			<PlaceCard v-for="i in 7" :key="i"></PlaceCard>
		</section>
	</main>
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
.explore {
	display: grid;
	grid-gap: 32px;
	align-items: stretch;
	justify-items: stretch;
}

.explore .explore_list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	grid-gap: 40px;
}
</style>
