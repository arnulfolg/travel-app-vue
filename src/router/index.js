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
		path: "/myplaces",
		name: "My Place",
		component: () => import("../views/MyPlaces.vue")
	},
	{
		path: "/categories",
		name: "Categories",
		component: () => import("../views/Categories.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
