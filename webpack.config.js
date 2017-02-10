const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
	const NODE_ENV = env && env.prod ? 'production' : 'development';
	let onProduction = NODE_ENV === 'production';
	
	let plugins = [
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) }
		}),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	];

	if (onProduction) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				minimize: true,
				compress: {
					warnings: false,
					screw_ie8: true
				},
				output: {
					comments: false
				}
			})
		);
	}

	return {
		devtool: onProduction ? 'source-map' : 'eval',
		entry: [
			'./src/app.jsx'
		],
		output: {
			path: path.join('dist/assets'),
			filename: 'bundle.js',
			publicPath: 'assets'
		},
		plugins,
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [
							'latest',
							'stage-0',
							'react'
							]
						}
					}]
				},
				{
					test:/\.css$/,
					use: ['style-loader', 'css-loader', 'autoprefixer-loader']
				},
				{
					test:/\.scss$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						'css-loader',
						'autoprefixer-loader',
						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									path.resolve(__dirname, './node_modules/foundation-sites/scss')
								]
							}
						}
					]
				}
			] 
		},
		devServer: {
			inline: true,
			contentBase: './dist',
			port: 3000
		}
	};
}