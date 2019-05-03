import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/Main'

Vue.use(Router);

export default new Router({
  routes: [
    /*
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
  /*    {
      path: '/',
      name: 'HelloWorld',
      component: ()=> import('@/views/PdfDemo/PdfDemo')
    }, */


    {
      path: '/',
      redirect: '/main',
    },{
      path: '/main',
      name: 'Main',
      component: ()=> import('@/views/Main'),
      children: [
        {
          path: '/',
          name: 'PdfDemo',
          component: ()=> import('@/views/PdfDemo/PdfDemo')
        },
        {
          path: '/PdfDemo',
          name: 'PdfDemo',
          component: ()=> import('@/views/PdfDemo/PdfDemo')
        }
      ]

    },




  ]
})
