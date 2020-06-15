<template>
	<section class="card">
		<img
			src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
			alt=""
		/>
		<h3>Place</h3>
		<p>tags</p>
		<router-link to="/categories">See place</router-link>
	</section>
</template>

<style lang="scss">
.card {
	background-color: var(--color-white);
	box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.25);
	padding: 14px;

	img {
		width: 100%;
	}
}
</style>
