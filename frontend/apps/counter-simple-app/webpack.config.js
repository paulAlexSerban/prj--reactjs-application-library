const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const NODE_ENV = process.env.NODE_ENV || 'development';

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

class GenerateManifestPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateManifestPlugin', (compilation, callback) => {
            const manifest = {
                formatted_name: packageJson.formatted_name,
                short_name: PROJECT_NAME,
                description: packageJson.description,
                start_url: `${BASE_URL}${PROJECT_NAME}`,
                readme: getReadme(),
            };

            const json = JSON.stringify(manifest, null, 2);
            compilation.assets['manifest.json'] = {
                source: function () {
                    return json;
                },
                size: function () {
                    return json.length;
                },
            };

            callback();
        });
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: NODE_ENV === 'development' ? '/' : `${BASE_URL}${PROJECT_NAME}/`,
    },
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-class-properties'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css' }),
        new GenerateManifestPlugin(),
    ],
};
