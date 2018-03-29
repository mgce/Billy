
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
 resolve: {
   modules:[
     "node_modules",
     path.resolve(__dirname, "ClientApp"),
   ],
   alias:{
     'Buttons': path.resolve(__dirname, "ClientApp/components/Buttons"),
     'Forms': path.resolve(__dirname, "ClientApp/components/Forms"),
     'General': path.resolve(__dirname, "ClientApp/components/General"),
     'Tables': path.resolve(__dirname, "ClientApp/components/Tables"),
     'HomeNavbar': path.resolve(__dirname, "ClientApp/scenes/Home/components/Navbar"),
     'HomeContent': path.resolve(__dirname, "ClientApp/scenes/Home/components/Content"),
     'HomeSidebar': path.resolve(__dirname, "ClientApp/scenes/Home/components/Sidebar"),
     'Sign': path.resolve(__dirname, "ClientApp/scenes/Sign"),
     'Others': path.resolve(__dirname, "ClientApp/components/Others"),
   }
 },
 plugins: [
    new ExtractTextPlugin("./bundle.css")
  ]
}
