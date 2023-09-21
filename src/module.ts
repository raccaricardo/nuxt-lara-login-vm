import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addImports
} from '@nuxt/kit'
import { ModuleOptions } from './types'

const defaults: ModuleOptions = {
  token: true,
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
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-lara-login-vm',
    configKey: 'nuxtLaraLoginVm'
  },
  defaults,
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.nuxtLaraLoginVm = options
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))

    addImports({
      name: 'useAuth',
      as: 'useAuth',
      from: resolve('runtime/composables')
    })
  }
})
