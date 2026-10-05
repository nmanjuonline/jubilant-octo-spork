import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Runner Race Companion',
        short_name: 'RaceDay',
        display: 'standalone',
        start_url: '/',
        theme_color: '#0f766e',
        background_color: '#f3f5f4',
        // TODO: add 192/512 px icons in /public and list them here
      },
    }),
  ],
  test: { environment: 'node' },
})
