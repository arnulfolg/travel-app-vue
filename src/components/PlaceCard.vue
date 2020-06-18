<template>
	<section class="place_card">
		<picture class="card_image">
			<img :src="image" alt="" />
		</picture>
		<section class="card_content">
			<h3>{{ title }}</h3>
			<p class="tags">
				<span class="tag" v-for="item in categories" :key="item">{{
					item
				}}</span>
			</p>
			<router-link to="/places/place">See place</router-link>
		</section>
	</section>
</template>

<script>
export default {
	name: "Place Card",
	props: {
		title: { type: String, required: true },
		image: { type: String, required: false },
		categories: { type: Array, required: true }
	}
}
</script>

<style lang="scss">
.place_card {
	background-color: var(--color-white);
	box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);

	.card_image img {
		width: 100%;
	}

	.card_content {
		padding: 10px 40px 30px;

		p {
			font-size: 1.2rem;
			display: flex;
			flex-wrap: wrap;
		}
	}

	span.tag {
		background-color: var(--main-app-color);
		padding: 4px 8px;
		border-radius: 36px;
		margin: 4px;
		word-break: break-all;
		cursor: default;

		&::selection {
			background-color: var(--main-app-color);
		}
	}
}
</style>
