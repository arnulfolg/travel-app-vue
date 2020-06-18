<template>
	<section class="place_card">
		<picture class="card_image">
			<img
				src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
				alt=""
			/>
		</picture>
		<section class="card_content">
			<h3>Place</h3>
			<p class="tags">
				<span class="tag">Mexico</span>
				<span class="tag">Europa</span>
				<span class="tag">Pueblo Magico</span>
			</p>
			<router-link to="/places/place">See place</router-link>
		</section>
	</section>
</template>

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
