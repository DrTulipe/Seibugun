/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MATOMO_URL_BASE: string
    readonly VITE_MATOMO_SITE_ID: string
    readonly VITE_MATOMO_DISABLED: string
    readonly DEV: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}