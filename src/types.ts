import { FetchOptions, FetchRequest } from 'ofetch'

export interface Endpoints {  
  csrf: string
  login: string
  logout: string
  user: string
}

export interface Redirects {
  home: string
  login: string
  logout: string
}

export interface ModuleOptions {
  baseUrl: string
  token: boolean
  csrf: CSRFSpec
  endpoints: Endpoints
  redirects: Redirects
}

export interface Auth {
  user: any | null
  loggedIn: boolean
  token: string | null
}

export interface CSRFSpec {
  headerKey: string
  cookieKey: string
  tokenCookieKey: string
}

export type ApiFetch = <T>(
  endpoint: FetchRequest,
  options?: FetchOptions
) => Promise<T>

export type Csrf = Promise<void>

export type Callback = (response: any) => void

export interface NuxtLaraLoginVmPlugin {
  login: (data: any, callback?: Callback | undefined) => Promise<void>
  logout: (callback?: Callback | undefined) => Promise<void>
  getUser<T>(): Promise<T | undefined>
}

// @ts-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $laraAuth: NuxtLaraLoginVmPlugin
  }
}

// Nuxt Bridge & Nuxt 3
declare module '#app' {
  interface NuxtApp extends PluginInjection {}
}

interface PluginInjection {
  $laraAuth: NuxtLaraLoginVmPlugin
  $apiFetch: ApiFetch  
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginInjection {}
}
