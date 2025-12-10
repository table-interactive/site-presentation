import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue'
import ExperimentationPage from '@/pages/experimentation.vue'
import MaterielPage from '@/pages/materiel.vue'
import Tp2Page from '@/pages/tp2.vue'
import MontagePafe from '@/pages/montage.vue'
import LogicielPage from '@/pages/logiciel.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/tp4/montage', component: MontagePafe },
  { path: '/tp4/logiciel', component: LogicielPage },
  { path: '/tp2', component: Tp2Page },
  { path: '/materiel', component: MaterielPage },
  { path: '/experimentation', component: ExperimentationPage },
]

export default createRouter({
  history: createWebHashHistory('/projet-veille/'),
  routes
})
