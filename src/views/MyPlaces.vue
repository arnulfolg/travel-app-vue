<template>
	<main class="main myplaces">
		<h2>My places</h2>
		<p>
			A list of all the places you have visited and the places you want to
			visit.
		</p>
		<section class="places">
			<PlaceCard v-for="i in 5" :key="i"></PlaceCard>
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
.myplaces .places {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 12px;
}
</style>
