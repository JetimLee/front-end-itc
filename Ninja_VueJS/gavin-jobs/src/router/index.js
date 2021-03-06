import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

//the actual routes of the router, anytime you need to change something you add an object here
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    //lazily loading seems really really cool
    component: () => import("../views/About.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    //because this is true, the params are passed as props
    props: true,
  },
  //redirects
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catch all 404
  //uses a regex
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  //this function uses the web history api in the browser, letting you go forward/back in previous routes. there's also a hash one
  //99% of the time you don't have to change anything here
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
