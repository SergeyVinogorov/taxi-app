   const path = require('path');
	 const HtmlWebpackPlugin = require('html-webpack-plugin');
	 const commonPaths = require("./common-paths");

   module.exports = {
     entry: './src/app.tsx',
     resolve: {
       extensions: ['.ts', '.tsx', '.js'],
     },
     module: {
       rules: [
         {
           test: /\.(ts|tsx)$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           },
				 },
				{
        test: /\.css$/i,
        include: commonPaths.stylesheetsPath,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
							postcssOptions: {
								config: path.resolve(__dirname, "./postcss.config.js"),
							},
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: [/node_modules/],
        include: commonPaths.srcPath,
        use: [
          {
            loader: "style-loader"
          },
          'css-modules-typescript-loader',
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
							importLoaders: 1,
          		// modules: true,
              // modules: {
							// 	// localIdentName: "[name]_[local]_[hash:base64:5]"
								
              // },
            }
          },
          {
            loader: "postcss-loader",
            options: {
							postcssOptions: {
								config: path.resolve(__dirname, "./postcss.config.js"),
							},
            }
          }
        ]
      }
       ],
     },
     devServer: {
       contentBase: path.join(__dirname, 'build'),
       historyApiFallback: true,
       host: '0.0.0.0',
       compress: true,
       hot: true,
       port: 3000,
       publicPath: '/',
     },
     devtool: 'source-map',
     output: {
       filename: '[name].bundle.js',
       publicPath: '/',
       path: path.resolve(__dirname, 'build'),
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: path.join(__dirname, 'index.html'),
       }),
     ],
	 };
