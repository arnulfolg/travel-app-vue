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
			<form>
				<fieldset :disabled="disableForm">
					<section class="review">
						<button
							class="review_thumbs"
							type="button"
							@click.prevent="toggleLike"
						>
							<i
								:class="[
									userPlaceData.likeStatus == 1 ? 'fas' : 'far',
									'fa-thumbs-up'
								]"
							></i>
							<span>4.2K</span>
						</button>
						<button
							class="review_thumbs"
							type="button"
							@click.prevent="toggleDisike"
						>
							<i
								:class="[
									userPlaceData.likeStatus == 0 ? 'fas' : 'far',
									'fa-thumbs-down'
								]"
							></i>
							<span>124</span>
						</button>
					</section>
					<section class="checkbox">
						<input
							type="checkbox"
							id="wantToVisit"
							name="wantToVisit"
							v-model="userPlaceData.wantToVisit"
						/>
						<label for="wantToVisit">Want to visit</label>
					</section>
					<section class="checkbox">
						<input
							type="checkbox"
							id="hadVisited"
							name="hadVisited"
							v-model="userPlaceData.hadVisited"
							checked
						/>
						<label for="hadVisited">Had visited</label>
					</section>
				</fieldset>
			</form>
		</aside>
	</article>
	<section
		class="banner"
		:style="{ 'background-image': 'url(' + place.image + ')' }"
	></section>
</template>

<script>
import { useStore } from "vuex"

export default {
	name: "Place",
	setup() {
		const store = useStore()
		const disableForm = false

		return { store, disableForm }
	},
	data() {
		return {
			place: {},
			userPlaceData: {
				likeStatus: -1,
				wantToVisit: false,
				hadVisited: false
			}
		}
	},
	methods: {
		toggleLike() {
			if (this.userPlaceData.likeStatus == 1) {
				this.userPlaceData.likeStatus = -1
			} else {
				this.userPlaceData.likeStatus = 1
			}

			let myHeaders = new Headers()
			myHeaders.append("Content-Type", "application/json")

			let body = JSON.stringify({
				docid: this.userPlaceData.docid || null,
				uid: this.store.state.userData.uid,
				pid: this.place.id,
				likeStatus: this.userPlaceData.likeStatus,
				wantToVisit: this.userPlaceData.wantToVisit,
				hadVisited: this.userPlaceData.hadVisited
			})

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: body,
				redirect: "follow"
			}

			const saveUserPlace_url = this.store.state.API_URL + "saveUserPlace"

			fetch(saveUserPlace_url, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log("error", error))
		},
		toggleDisike() {
			if (this.userPlaceData.likeStatus == 0) {
				this.userPlaceData.likeStatus = -1
			} else {
				this.userPlaceData.likeStatus = 0
			}

			let myHeaders = new Headers()
			myHeaders.append("Content-Type", "application/json")

			let body = JSON.stringify({
				docid: this.userPlaceData.docid || null,
				uid: this.store.state.userData.uid,
				pid: this.place.id,
				likeStatus: this.userPlaceData.likeStatus,
				wantToVisit: this.userPlaceData.wantToVisit,
				hadVisited: this.userPlaceData.hadVisited
			})

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: body,
				redirect: "follow"
			}

			const saveUserPlace_url = this.store.state.API_URL + "saveUserPlace"

			fetch(saveUserPlace_url, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log("error", error))
		},
		getDocId() {
			console.log("docid")
		}
	},
	async mounted() {
		let placeSelected = this.$route.params.place
		var requestOptions = {
			method: "GET",
			redirect: "follow"
		}

		const getPlace_url =
			this.store.state.API_URL + "getPlace?place=" + placeSelected

		let getPlace = await fetch(getPlace_url, requestOptions)
		this.place = await getPlace.json()

		do {
			let getUserPlace = await fetch(
				this.store.state.API_URL +
					"getUserPlace?uid=" +
					this.store.state.userData.uid +
					"&pid=" +
					this.place.id +
					"",
				requestOptions
			)
			this.userPlaceData = await getUserPlace.json()
		} while (this.store.state.userData.uid.length == 0)
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

			button.review_thumbs {
				padding: 10px;
				font-family: "Open Sans", sans-serif;
				font-weight: 300;
				font-size: 1.5rem;
				line-height: 28px;
				margin-bottom: 0;
				background-color: white;
				border: none;

				&:focus,
				&:active {
					border: none;
				}

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
