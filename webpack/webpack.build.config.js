const path = require('path')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const resolve = dir => path.join(__dirname, '..', dir)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(basicConfig, {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    output: {
        path: resolve('dist'),
        filename: 'index.js',
        library: 'VuetifyDaterangePicker',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`,
        libraryExport: 'default'
    },
    externals: {
        'date-fns': 'date-fns'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "vuetify-daterange-picker.css"
        })
    ]
})
