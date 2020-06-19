<template>
	<article class="main place">
		<section class="place_content">
			<h2>{{ place.place }}</h2>
			<p class="tags">
				<span class="tag" v-for="item in place.categories" :key="item">{{
					item
				}}</span>
			</p>
			<p>{{ place.description }}</p>
		</section>
		<aside class="place_actions">
			<section class="review">
				<section class="review_thumbs" @click="placeLiked = true">
					<i :class="[placeLiked ? 'fas' : 'far', 'fa-thumbs-up']"></i>
					<span>4.2K</span>
				</section>
				<section class="review_thumbs" @click="placeLiked = false">
					<i :class="[!placeLiked ? 'fas' : 'far', 'fa-thumbs-down']"></i>
					<span>124</span>
				</section>
			</section>
			<section class="checkbox">
				<input type="checkbox" id="wantToVisit" name="wantToVisit" />
				<label for="wantToVisit">Want to visit</label>
			</section>
			<section class="checkbox">
				<input type="checkbox" id="hadVisited" name="hadVisited" checked />
				<label for="hadVisited">Had visited</label>
			</section>
		</aside>
	</article>
	<section
		class="banner"
		:style="{ 'background-image': 'url(' + place.image + ')' }"
	></section>
</template>

<script>
export default {
	name: "App",
	setup() {
		const placeLiked = true

		return { placeLiked }
	},
	data() {
		return {
			place: {}
		}
	},
	async mounted() {
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		let response = await fetch(
			"http://localhost:5001/travel-app-9b55f/us-central1/getPlace?place=Paris",
			requestOptions
		)
		this.place = await response.json()
	}
}
</script>

<style lang="scss">
.banner {
	grid-area: place_banner;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: calc(50vh - 100px);
}
.place {
	display: grid;
	grid-template-columns: 5fr 2fr;
	grid-gap: 40px;

	.place_content {
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
		background-color: var(--color-white);
		box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
		padding: 40px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: center;
		align-items: stretch;

		.review {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-around;
			align-content: stretch;
			align-items: center;

			.review_thumbs {
				padding: 10px;
				cursor: pointer;
				font-family: "Open Sans", sans-serif;
				font-weight: 300;
				font-size: 1.5rem;
				line-height: 28px;

				i {
					margin-right: 10px;
				}

				.fas {
					color: var(--main-app-color);

					+ span {
						color: var(--main-app-color);
						font-weight: 600;
					}
				}
			}
		}
		.checkbox {
			margin-bottom: 5px;
			input {
				margin-right: 10px;

				&:checked {
					box-shadow: 0 0 0 3px var(--main-app-color);
				}
			}
		}
	}
}
</style>
