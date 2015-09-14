module.exports = {
	entry: {
		index: './js/src.js'
	},
	output: {
		filename: './dist.js',
		path: './js/src'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?stage=0'
			}, {
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.jsx']
	},

	watch: true
};