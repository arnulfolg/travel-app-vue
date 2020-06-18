<template>
	<header class="travel_header">
		<section>
			<router-link to="/">
				Travel App
			</router-link>
		</section>

		<nav class="header_navigation">
			<ul>
				<li><router-link to="/places">Explore</router-link></li>
				<li>
					<router-link to="/categories">Categories</router-link>
				</li>
			</ul>
		</nav>
		<section>
			<router-link to="/">
				<i class="fas fa-sign-out-alt"></i>
				Sign out
			</router-link>
		</section>
	</header>
</template>

<style lang="scss">
header.travel_header {
	height: 100px;
	background-color: var(--main-app-color);
	position: static;
	z-index: 100;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	padding: 40px;
}

.header_navigation ul {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	padding: 40px;

	li {
		margin: 0 14px;
	}
}
</style>
