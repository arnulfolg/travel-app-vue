<template>
	<section class="myplaces">
		<h2>My places</h2>
		<p>
			A list of all the places you have visited and the places you want to
			visit.
		</p>
		<section class="places">
			<AppCard v-for="i in 5" :key="i"></AppCard>
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
.myplaces .places {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 12px;
}
</style>
