const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
var BUILD_PATH = path.resolve(__dirname, 'dist'); 
module.exports = {
    entry: path.join(__dirname,'./src/index.js'),
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new htmlWebpackPlugin({ 
            template: path.join(__dirname, './src/index.html'), 
            filename: 'index.html', 
            favicon:"./src/icon.ico"
        }),
        new vueLoaderPlugin()
    ],
    module: {  
        rules: [ 
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            { 
                test: /\.css$/, 
                use: ['style-loader','css-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            }, 
            {
                test: /\.(gif|jpg|png|bmp|eot|woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images'
                        }
                    }
                ]
            },
            { 
                test: /\.vue$/, 
                use:['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    devServer: { 
        open: true, 
        port: 3050, 
        contentBase: 'src', 
        hot: true,
        //use agency to get or post from other site
        /* proxy: {
            '/root': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/root': ''
                }
            }
        } */
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_PATH
    }
}