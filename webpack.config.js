const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (() => {
    const isProduction = (process.env.NODE_ENV === 'production');

    const srcPath = path.join(__dirname, './src');
    const outputPath = path.join(__dirname, './www');
    const publicPath = '/';

    const fileNames = {
        js: `js/[name].[${isProduction ? 'chunk' : ''}hash].js`,
        css: `css/[name].[${isProduction ? 'chunk' : ''}hash].css`
    };

    const config = {
        mode: process.env.NODE_ENV || 'development',
        entry: './src/index',
        output: {
            path: outputPath,
            publicPath,
            filename: fileNames.js
        },
        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules')
            ],
            extensions: ['.js']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        test: path.resolve(__dirname, 'node_modules'),
                        name: 'vendor',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: fileNames.css
            }),
            new CleanWebpackPlugin([outputPath]),
            new HtmlWebpackPlugin({
                template: path.join(srcPath, 'index.html'),
                path: outputPath,
                filename: 'index.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'eslint-loader',
                            options: {
                                failOnError: isProduction
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]_[sha256:hash:base64:5]',
                                importLoaders: 2
                            }
                        },
                        'postcss-loader',
                        'less-loader'
                    ]
                }
            ]
        }
    };

    if (isProduction) {
        config.devtool = 'source-map';
    }

    return config;
})();
