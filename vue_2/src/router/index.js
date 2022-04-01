import VueRouter from "vue-router";
import WholeCom from '../components/WholeCom'
import UserHome from '../page/UserHome'
import LoginPage from '../page/LoginPage'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: WholeCom
        },{
            path: '/',
            component: UserHome
        },{
            path: '/loginPage',
            component: LoginPage
        }
    ]
})