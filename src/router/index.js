import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import subCate from "../views/subCate.vue"
import NormalReport from "../views/NormalReport.vue"
import ProblemTicket from"../views/ProblemTicket.vue"
import StatusTracking from"../views/StatusTracking.vue"
import AdHomeView from"../views/AdHomeView.vue"
import History from "../views/history.vue"
import HistoryAd from "../views2/HistoryAd.vue"
import ProblemTicketAd from "../views2/ProblemTicketAd.vue"
import StatustrackingAD from "../views2/StatusTrackingAd.vue"
import StatusLine from "../views2/StatusLine.vue"
import ProblemDum from "../views2/ProblemDum.vue"

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
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdHomeView
    },
    {
      path: '/historyadmin',
      name: 'historyadmin',
      component: HistoryAd
    },
    {
      path: '/problemticketad',
      name: 'problemticketadadmin',
      component: ProblemTicketAd
  },
  {
    path: '/statustrackingad',
    name: 'statustrackingad',
    component: StatustrackingAD
  },
  {
    path: '/statusline',
    name: 'statusline',
    component: StatusLine
},
{
  path: '/problemdum',
  name: 'problemdum',
  component: ProblemDum
}
  
  ]
})

export default router
