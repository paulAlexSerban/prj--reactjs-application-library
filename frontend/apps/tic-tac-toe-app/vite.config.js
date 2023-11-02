import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PROJECT_NAME = require('./package.json').name.split('/').pop();

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: '/',
    };

    if (command !== 'serve') {
        config.base = `/prj--reactjs-component-lib/${PROJECT_NAME}`;
    }

    return config;
});
