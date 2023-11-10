import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectView from "../views/ProjectView.vue";
import TeamView from "../views/TeamView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
