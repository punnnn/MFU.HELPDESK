import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import subCate from "../views/subCate.vue"
import NormalReport from "../views/NormalReport.vue"
import ProblemTicket from"../views/ProblemTicket.vue"
import StatusTracking from"../views/StatusTracking.vue"
import History from "../views/history.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cate',
      name: 'cate',
      component: subCate
    },
    {
      path: '/normalreport',
      name: 'normal report',
      component: NormalReport
    },
    {
      path: '/problemticket',
      name: 'problem ticket',
      component: ProblemTicket
    },
    {
      path: '/statustracking',
      name: 'status tracking',
      component: StatusTracking
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})

export default router
