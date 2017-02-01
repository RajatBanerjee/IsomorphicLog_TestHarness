var webpack = require ('webpack');
process.env.BROWSER =true
module.exports = {
    entry: './application/main.js',
    output: {
        filename: './public/javasctips/bundle.js'
    },plugins: [
     
      new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BROWSER:true
     
      }
    })
    ]
};