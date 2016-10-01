var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports= {
	entry:"./js/index.js",
	output:{
		path:'./js/',
		filename:'bundle.js'
	},
	module:{
  loaders: [
    {test: /\.css$/, loader: "css-loader"},
    {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
    {test: /\.scss$/, loader: "style!css!sass|postcss"},
    {test:/\.html$/,loader:"raw-loader"},
    {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
    { test: /\.js$/, loader: 'jsx-loader?harmony' }
	  ]
},   
resolve: {
        extensions: ['', '.jsx','.js', '.json', 'coffee']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};