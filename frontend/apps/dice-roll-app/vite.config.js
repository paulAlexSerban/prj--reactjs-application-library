import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PROJECT_NAME = require('./package.json').name.split('/').pop();
const BASE_URL = process.env.BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        base: '/',
    };

    if (command !== 'serve') {
        config.base = `${BASE_URL}${PROJECT_NAME}`;
    }

    return config;
});
