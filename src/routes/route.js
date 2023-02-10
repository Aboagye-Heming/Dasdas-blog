// import HomePage from '@/pages/HomePage.vue'
import AboagyePage from '@/pages/AboagyePage.vue'
import DetailsPage from '@/pages/DetailsPage.vue'

const routes = [
  {
    path: "/",
    component: () => import("@/pages/HomePage.vue"),
    name: "home",
    meta: {}
  },
  {
    path: "/aboagye/:name/here/name/:family/home",
    component: AboagyePage,
    name: "aboagye",
    meta: {}
  },
  {
    path: "/:id/:title/details",
    component: DetailsPage,
    name: "blog-details",
    meta: {
      authRequired: true,
    }
  },
];

export default routes 