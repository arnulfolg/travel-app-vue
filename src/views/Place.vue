<template>
	<section class="place">
		<section
			class="place_banner"
			style='background-image: url("https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");'
		></section>
		<section class="place_content">
			<h2>Place</h2>
			<p class="tags">
				<span class="tag">Mexico</span>
				<span class="tag">Europa</span>
				<span class="tag">Pueblo Magico</span>
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi
				velit labore atque ipsum possimus maiores adipisci iste distinctio
				molestiae suscipit officiis similique voluptates perferendis, incidunt
				molestias eligendi eius! Quam.
			</p>
		</section>
		<aside class="place_actions">
			Actions...
		</aside>
	</section>
</template>

<script></script>

<style lang="scss">
.place {
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 350px 1fr;
	grid-template-areas:
		"place_banner place_banner"
		"place_content place_actions";
	grid-gap: 40px;

	.place_banner {
		grid-area: place_banner;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.place_content {
		grid-area: place_content;

		p.tags {
			font-size: 1.2rem;
			display: flex;
			flex-wrap: wrap;
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
	}

	.place_actions {
		grid-area: place_actions;

		background-color: var(--color-white);
		box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
	}
}
</style>
