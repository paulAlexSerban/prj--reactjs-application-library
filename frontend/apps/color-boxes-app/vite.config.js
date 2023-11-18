import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
const packageJson = require('./package.json');
const PROJECT_NAME = packageJson.name.split('/').pop();
const BASE_URL = process.env.BASE_URL || '/';

// if has readme.md, get it's content and return it
const getReadme = () => {
    if (fs.existsSync('./readme.md')) {
        return fs.readFileSync('./readme.md', 'utf8');
    }
    return '';
};

const generateManifest = () => {
    const manifest = {
        formatted_name: packageJson.formatted_name,
        short_name: PROJECT_NAME,
        description: packageJson.description,
        start_url: `${BASE_URL}${PROJECT_NAME}`,
        readme: getReadme(),
    };

    // if public does not exist, create it
    if (!fs.existsSync('./public')) {
        fs.mkdirSync('./public');
    }

    fs.writeFileSync('./public/manifest.json', JSON.stringify(manifest, null, 2));
    return manifest;
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [
            react(),
            {
                name: 'generate-manifest',
                apply: 'build',
                buildStart() {
                    generateManifest();
                },
            },
        ],
        base: '/',
    };

    if (command !== 'serve') {
        config.base = `${BASE_URL}${PROJECT_NAME}`;
    }

    return config;
});
