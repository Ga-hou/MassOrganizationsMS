import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login";
import Home from "../views/Home/Home";
import Register from "../views/Register/Register";
import Manager from "../views/Manager/Manager";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: "/manager",
    name: "manager",
    component: Manager
  }
];

const router = new VueRouter({
  routes
});

export default router;
