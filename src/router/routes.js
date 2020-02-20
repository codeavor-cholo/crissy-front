
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('pages/home.vue'),
    children: [
       { path: '', component: () => import('pages/front.vue') },
       { path: '/packages', component: () => import('pages/packages.vue') },
       { path: '/reservation', component: () => import('pages/reservation.vue') },
       { path: '/menu', component: () => import('pages/menu.vue') },
       { path: '/profile', component: () => import('pages/profile.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
