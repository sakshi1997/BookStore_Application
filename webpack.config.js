module.exports={
    entry :'./public/index.js',
    output: {
        path:__dirname,
        filename: '/public/bundle.js'
    },

   module: {
       loaders: [
           {
               exclude: /node_modules/,
               loader:'babel',
               query:{
                   presets :['react','es2015']
               },
               test: /\.js?$/,
               exclude :/(node_modules)/
           }

       ]
   }
}