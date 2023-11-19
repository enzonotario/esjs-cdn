import { defineConfig } from 'vite'
import { vavite } from 'vavite'

export default defineConfig({
  plugins: [
    vavite({
      handlerEntry: '/server.ts',
      reloadOn: 'static-deps-change',
      serveClientAssetsInDev: true,
    }),
  ],
  server: {
    port: 1337,
  },
})
