import routes from 'virtual:generated-pages';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...routes,
		{
			path: '/:pathMatch(.*)*',
			redirect: '/',
		},
	],
});

export default router;
