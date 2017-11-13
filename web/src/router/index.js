import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewStudents from '@/components/students/List'
import CreateStudent from '@/components/students/Create'
import ViewStudent from '@/components/students/View'
import EditStudent from '@/components/students/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/students',
      name: 'ViewStudents',
      component: ViewStudents
    },
    {
      path: '/students/add',
      name: 'CreateStudent',
      component: CreateStudent
    },
    {
      path: '/students/:id',
      name: 'ViewStudent',
      component: ViewStudent,
      props: true
    },
    {
      path: '/students/:id/edit',
      name: 'EditStudent',
      component: EditStudent,
      props: true
    }
  ],
  mode: 'history'
})
