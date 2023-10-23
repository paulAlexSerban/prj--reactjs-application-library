const terser = require('@rollup/plugin-terser');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const NODE_ENV = process.env.NODE_ENV || 'development';
const input = [
    './src/index.js',
    './src/atoms/Text/index.js',
    './src/atoms/Color/index.js',
    './src/atoms/Button/index.js',
    './src/atoms/Margin/index.js',
    './src/molecules/Card/index.js',
    './src/organisms/Header/index.js',
    './src/organisms/Counter/index.js',
];
const plugins = [
    resolve(),
    babel({
        babelHelpers: 'bundled',
        presets: [
            '@babel/preset-env',
            '@babel/preset-react', // Add this preset
        ],
    }),
    babel.getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
    }),
];

if (NODE_ENV === 'production') {
    plugins.push(terser());
}

module.exports = {
    input,
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: NODE_ENV === 'development',
        preserveModules: true,
    },
    plugins,
    external: ['react', 'prop-types', '@prj--reactjs-component-lib/media-assets'],
};
