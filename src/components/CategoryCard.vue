<template>
	<section class="category_card">
		<div class="titles">
			<img src="@/assets/category_pueblo_magico.png" alt="" />
			<h2>{{ title }} ({{ num }})</h2>
		</div>
		<p>
			A "Magical Village" is a place with symbolism, legends, history, important
			events, festivals, traditions, great food, and fun interactive shopping.
		</p>
		<router-link to="/categories/category">See places</router-link>
	</section>
</template>

<script>
export default {
	name: "Category Card",
	props: {
		title: { type: String, required: true },
		num: { type: Number, required: false },
		image: { type: String, required: false }
	}
}
</script>

<style lang="scss">
.category_card {
	background-color: var(--color-white);
	box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
	padding: 30px 40px;

	h2 {
		font-style: normal;
		font-weight: 600;
		font-size: 2rem;
		line-height: 28px;
	}

	img {
		width: 100%;
	}

	p {
		margin-bottom: 20px;
	}
}
</style>
