import { defineNuxtConfig } from 'nuxt/config'
import nuxtLaraLoginVm from '../dist/module'


export default defineNuxtConfig({
  app: {
    head: {
      title: 'nuxt-lara-login-vm'
    }
  },
  routeRules: {
    '/cuenta/**': { ssr: false },
    '/login/**': { ssr: false }
  },
  modules: [nuxtLaraLoginVm],

  nuxtLaraLoginVm: {
    token: true, // set true to test jwt-token auth instead of cookie
    baseUrl: 'http://localhost:8000',
    endpoints: {
      login: '/login',
      logout: '/logout',
      user: '/user'
    },
    redirects: {
      home: '/',
      login: '/login',
      logout: '/'
    }
  },

  myModule: {},
  devtools: { enabled: true }
})
