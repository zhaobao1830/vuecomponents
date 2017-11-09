import Vue from 'vue'
import Router from 'vue-router'
import CountDown from '@/components/countDown'
import CountDown1 from '@/components/countDown1'
import Loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: CountDown
    },
    {
      path: '/countDown',
      component: CountDown
    },
    {
      path: '/countDown1',
      component: CountDown1
    },
    {
      path: '/loading',
      component: Loading
    }
  ]
})
