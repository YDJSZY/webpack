var webpack = require("webpack");
var ResolverPlugin = require('webpack/lib/ResolverPlugin');
var path = require("path");
module.exports = {
    entry: {
        app:'./app.js',
        commons:[
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/oclazyload/dist/ocLazyLoad.min.js'
        ]
    }, //演示单入口文件
    output: {
    path: path.join(__dirname, 'out'),  //打包输出的路径
    filename: 'app.js',			  //打包后的名字
    publicPath: "./out/"				//html引用路径，在这里是本地地址。
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader",exclude:/(node_modules|bower_components)/},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.eot/,loader : 'file?prefix=font/'},
            {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf/, loader : 'file?prefix=font/'},
            {test: /\.svg/, loader : 'file?prefix=font/'},
            {test: path.resolve(__dirname+'/bower_components', 'jquery/dist/jquery.min.js'), loader: 'expose?jQuery'},
        ],
        //noParse: [/angular/,/jquery/]
    },
    resolve: {
        alias: {
            'bower' : __dirname+'/bower_components',
        },
        modulesDirectories: ["node_modules", "bower_components"],
        //root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new ResolverPlugin(
            new ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js')//这是妮第三方库打包生成的文件
    ],
    externals: {
        "angular" : "angular",
    }
};