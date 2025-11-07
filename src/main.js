import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "./styles/tailwind.css"

import LandingPage from "./pages/LandingPage.vue"
import Login from "./pages/Login.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, name: "home" },
    { path: "/login", component: Login, name: "login" }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount("#app")
