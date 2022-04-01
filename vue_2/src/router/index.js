import VueRouter from "vue-router";
import WholeCom from '../components/WholeCom'
import UserHome from '../page/UserHome'
import SignupPage from '../page/SignupPage'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: WholeCom
        },{
            path: '/',
            component: UserHome
        },{
            path: '/signup',
            component: SignupPage
        }
    ]
})