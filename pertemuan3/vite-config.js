import {defineConfig} from 'vite'

export default defineConfig({
    server: {
        port:3000
    },
    
    build: {
        outDir: 'production',
        rollupOptions: {
            input: {
                index: 'index.html',
                contact:'contact.html'
            }
        }
    }
    
})