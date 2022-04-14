import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const createRouter = () =>
	new VueRouter({
		routes: [
			{
				path: '/characters',
				component: () => import('@/views/CharactersView.vue'),
			},
			{
				path: '/character/:id',
				component: () => import('@/views/CharacterView.vue'),
			},
		],
	})

const router = createRouter()

export default router
