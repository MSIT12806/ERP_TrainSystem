import { createRouter, createWebHistory } from 'vue-router'
import RonHome from '../components/Home.vue'
import RonAbout from '../components/About.vue'
import RonRegister from '../components/Register.vue'
import TrainMain from '../components/trainsystem/TrainMain.vue'
import TrainSearchByLine from '../components/trainsystem/TrainSearchByLine.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: RonHome
    },
    {
        path: '/about',
        name: 'About',
        component: RonAbout
    },
    {
        path: '/register',
        name: 'Register',
        component: RonRegister
    },
    {
        path: '/trainMain',
        name: 'TrainMain',
        component: TrainMain
    },
    {
        path: '/TrainSearchByLine',
        name: 'TrainSearchByLine',
        component: TrainSearchByLine
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router