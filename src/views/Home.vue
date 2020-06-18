<template>
	<section class="dashboard">
		<section class="dashboard_explore">
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
		<section class="dashboard_featured">
			<h2>Featured Places</h2>
			<section class="places">
				<PlaceCard v-for="i in 3" :key="i"></PlaceCard>
			</section>
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
.dashboard {
	display: grid;
	grid-gap: 50px;
	align-items: stretch;
	justify-items: stretch;

	.card {
		background-color: var(--color-white);
		box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
		padding: 14px;
	}

	.dashboard_explore {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 40px;
		align-items: stretch;
		justify-items: stretch;
	}

	.dashboard_featured .places {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: auto;
		grid-gap: 40px;
	}
}
</style>
