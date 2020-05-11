
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
       { path: '/reservation/:id', component: () => import('pages/reservation.vue') },
       { path: '/mobres/:id', component: () => import('pages/mobres.vue') },
       { path: '/menu', component: () => import('pages/menu.vue') },
       { path: '/profile', component: () => import('pages/profile.vue') },
       { path: '/notification', component: () => import('pages/notification.vue') },
       { path: '/gallery', component: () => import('pages/gallery.vue') },
       { path: '/profilemob', component: () => import('pages/profilemob.vue') },
    ]
  },
  { path: '/loginmob', component: () => import('pages/loginmob.vue') },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
