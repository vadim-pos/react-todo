const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

module.exports = (env) => {
	function getEnv(env) {
		if (env && env.prod) { return 'production'; }
		if (env && env.test) { return 'test'; }
		return 'development';
	}

	const NODE_ENV = getEnv(env);
	const onProduction = NODE_ENV === 'production';

	try {
		envFile(path.join(__dirname, 'config/' + NODE_ENV + '.env'));
	} catch(e) {}
	
	let plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
				GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
			}
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