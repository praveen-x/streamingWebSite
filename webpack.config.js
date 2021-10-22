const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    devtool:'inline-source-map',
    devServer: {
        contentBase:'./dist',
        port:3030
    },
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist'),
        //publicPath:'/top-half/dist/' //less smart here
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']  //style > css
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                loader:'file-loader',
                options:{
                    name:'myPrefix.[name].[ext]',
                    outputPath:'images/',
                    publicPath:'./dist' // overrides output publicPath, needs outputPath
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        // new htmlWebpackPlugin({
        //     title:'html webpack plugin',
        //     filename:"myIndex.hrml",
        //     //template
        // })
    ]
}