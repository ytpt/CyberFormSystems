import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    clearScreen: false,
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
    resolve: {
        alias: {
            '~app': path.resolve('src/app'),
            '~features': path.resolve('src/features'),
            '~pages': path.resolve('src/pages'),
            '~shared': path.resolve('src/shared'),
            '~constants': path.resolve('src/constants'),
        },
    },
});