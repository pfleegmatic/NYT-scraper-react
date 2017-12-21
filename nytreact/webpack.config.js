//webpack.config.js

module.exports = {
    // configuration
  
  // This code will be compiled 
  entry: "./app/App.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  // transformations to be performed
  module: {
    loaders: [
      {
      //only working on files with .js or .jsx extension
        test: /\.jsx?$/,
        // Should we have Webpack will only process files in our app folder. This avoids processing node modules folder
        
        // node modules and server files unnecessarily
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          //specific transformations using
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
};