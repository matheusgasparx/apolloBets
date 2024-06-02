import { createRouter, createWebHashHistory } from 'vue-router'

import Esportes from "../components/views/Esportes.vue";
import Cassino from "../components/views/Cassino.vue";
import Login from "../components/views/Login.vue";
import Registrar from "../components/views/Registrar.vue";

const routes = [
    {
        path: '/',
        name: Esportes,
        component: Esportes
    },
    {
        path: '/cassino',
        name: Cassino,
        component: Cassino
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/registrar',
        name: Registrar,
        component: Registrar
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router