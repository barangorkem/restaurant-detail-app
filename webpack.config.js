const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/app.js",  // default is .src/index.js
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"
         }
       },
       {
         test: /\.html$/,
         use: [
           {
             loader: "html-loader"
           }
         ]
       },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    },
    { 
      test: /\.css$/, 
      use: [
        {
          loader: 'style-loader',
      },
      {
          loader: 'css-loader',
          options: {
              sourceMap: true,
          },
      }
      ]
    },
    { 
      test: /\.(jpe?g|png|gif|svg)$/, 
      use: [
        {
          loader: 'file-loader',
      }
      ]
    }
     ]
    },
   plugins: [
     new HtmlWebPackPlugin({
       template: "./src/index.html",
       filename: "./index.html"
     })
   ]
};