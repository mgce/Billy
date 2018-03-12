
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
 devtool: 'inline-source-map',
 entry: './ClientApp/index.js',
 output: {
    publicPath: "/js/",
    path: path.join(__dirname, "wwwroot", "js"),
    filename: "index-bundle.js"
 },
 devServer: {
  contentBase: "./dist"
 },
 module: {
   rules: [
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
  },
     {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
     },
       {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    name: 'assets/[name]_[hash].[ext]'
                }
            }
        ]
     },
     {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
   ]
 },
 plugins: [
    new ExtractTextPlugin("./bundle.css")
  ]
}