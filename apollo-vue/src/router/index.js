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
        path: '/Cassino',
        name: Cassino,
        component: Cassino
    },
    {
        path: '/Login',
        name: Login,
        component: Login
    },
    {
        path: '/Registrar',
        name: Registrar,
        component: Registrar
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router