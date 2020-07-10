<template>
	<main class="main loading">
		<section>
			<i class="fas fa-spinner fa-spin"></i>
			<p>Loading...</p>
		</section>
	</main>
</template>

<style lang="scss">
.loading {
	display: grid;
	grid-gap: 50px;
	align-items: stretch;
	justify-items: stretch;
	grid-template-rows: 50vh;
	grid-auto-columns: auto;

	section {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-content: stretch;
		align-items: center;

		i {
			color: var(--main-app-color);
			font-size: 4rem;
			margin-bottom: 1rem;
		}
	}
}
</style>
