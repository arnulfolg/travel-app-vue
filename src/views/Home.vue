<template>
	<section>
		<section class="explore">
			<section class="card">
				<h3>My Places</h3>
				<p>Look at the places you have been and the places you want to meet</p>
				<router-link to="/myplaces">See more</router-link>
			</section>
			<section class="card">
				<h3>Categories</h3>
				<p>
					Browse our places categories, perfect if you want to make a long trip
				</p>
				<router-link to="/categories">See more</router-link>
			</section>
		</section>
		<section class="featured">
			<h2>Featured Places</h2>
			<section class="places">
				<AppCard v-for="i in 12" :key="i"></AppCard>
			</section>
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
.card {
	background-color: var(--color-white);
	box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
	padding: 14px;
}

.explore {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 24px;
	align-items: stretch;
	justify-items: stretch;
}

.featured .places {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 12px;
}
</style>
