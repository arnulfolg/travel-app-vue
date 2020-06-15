<template>
	<section class="categories">
		<h2>Categories</h2>
		<p>
			Categories define what kind of place you are visiting. It stablishes a
			relationship between places so you can plan accordingly.
		</p>
		<section class="places">
			<AppCard v-for="i in 7" :key="i"></AppCard>
		</section>
	</section>
</template>

<script>
import AppCard from "@/components/AppCard.vue"

export default {
	name: "App",
	components: {
		AppCard
	}
}
</script>

<style lang="scss">
.categories .places {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 12px;
}
</style>
