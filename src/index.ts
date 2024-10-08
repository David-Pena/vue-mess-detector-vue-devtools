import type { App } from 'vue'
import { setupDevtools } from './devtools'
import { onDevToolsClientConnected } from '@vue/devtools-api'

export const VueMessDetectorVueDevtools = {
    install(app: App, options = {}) {
        console.log(`install called`, { app, options })
        setupDevtools(app)

        onDevToolsClientConnected(() => {
            console.log('devtools client connected')
        })

    },
}
