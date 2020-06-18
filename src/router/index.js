import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue")
	},
	{
		path: "/categories",
		name: "Categories",
		component: () => import("../views/Categories.vue")
	},
	{
		path: "/categories/category",
		name: "Category",
		component: () => import("../views/Category.vue")
	},
	{
		path: "/places",
		name: "Explore",
		component: () => import("../views/Explore.vue")
	},
	{
		path: "/places/place",
		name: "Place",
		component: () => import("../views/Place.vue")
	},
	{
		path: "/myplaces",
		name: "My Place",
		component: () => import("../views/MyPlaces.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
