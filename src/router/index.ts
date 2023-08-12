import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserInterface from '@/views/user/UserInterface.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import UserLayout from '@/layout/UserLayout.vue'
import Profile from '@/views/user/Profile.vue'
import Logout from '@/views/user/Logout.vue'
import Historique from '@/views/user/Historique.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   /*  {
      path: '/Calculator',
      name: 'Calculator',
      component: UserInterface
    }, */
    {
      path: '/signup',
      name: 'Sign up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'UserInterface',
      component: UserLayout, 
      children: [
        {
        path: '',
        name:'Home',
        component:UserInterface,
       /*  beforeEnter:[function blocked (to,from){
            return ('/signup')
          }], */
        },
        {
          path: 'profile',
          name:'Profile',
          component:Profile
        },
        {
          path: 'logout',
          name:'Logout',
          component:Logout
        },
        {
          path: 'historique',
          name:'Historique',
          component:Historique
        }
      ]
    }

  ]
})

export default router
