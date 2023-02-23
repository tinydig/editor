const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const optionalPlugins = isProduction ? [new MiniCssExtractPlugin()] : []

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),    
        ...optionalPlugins
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
};