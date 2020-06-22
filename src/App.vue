<template>
	<section class="header">
		<AppHeader></AppHeader>
	</section>

	<section class="content">
		<Suspense>
			<template #default>
				<router-view />
			</template>
			<template #fallback>
				<Loading />
			</template>
		</Suspense>
	</section>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import Loading from "@/components/Loading.vue"

export default {
	name: "App",
	components: {
		AppHeader,
		Loading
	}
}
</script>

<style lang="scss">
@import url("https://meyerweb.com/eric/tools/css/reset/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap");

:root {
	--main-app-color: #41b883;
	--color-white: #ffffff;
	--color-black: #000000;
	--main-gray: #dfdfdf;
	--container-size: 1024px;
}

html {
	box-sizing: border-box;
	font-size: 12px;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

#app {
	display: grid;
	grid-template-rows: 100px auto;
	grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
	grid-template-areas:
		"travel-header travel-header travel-header"
		"travel-content travel-content travel-content";
	align-items: stretch;
	justify-items: stretch;
}

.header {
	grid-area: travel-header;
}

.content {
	grid-area: travel-content;
	display: grid;
	grid-template-rows: minmax(auto 50vh) auto;
	grid-template-columns: subgrid;
	grid-template-areas:
		"travel-banner travel-banner travel-banner"
		". travel-main .";

	@supports not (grid-template-columns: subgrid) {
		grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
	}

	section.banner {
		grid-area: travel-banner;
	}

	.main {
		grid-area: travel-main;
		margin-top: 50px;
	}
}

h1 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 5rem;
	line-height: 84px;
}
h2 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 3.5rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h3 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2.8rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h4 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2.5rem;
	line-height: 56px;
	margin-bottom: 10px;
}
h5 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 2rem;
	line-height: 28px;
	margin-bottom: 10px;
}
h6 {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 28px;
	margin-bottom: 10px;
}
p,
ul,
label {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 300;
	font-size: 1.6rem;
	line-height: 28px;
	margin-bottom: 10px;

	&:last-child {
		margin-bottom: 0;
	}

	.text_bold {
		font-weight: bold;
	}
}
a {
	color: var(--color-black);
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 28px;

	&:hover {
		color: var(--color-dark-red);
	}
}
</style>
