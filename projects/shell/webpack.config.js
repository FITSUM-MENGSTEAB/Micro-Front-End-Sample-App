const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // output :{
  //    scriptType : "text/javascript"
  // },
  remotes: {
    // Check this line. Is port 4201 configured?
    mfe1: 'http://localhost:4201/remoteEntry.js',  
   // mfe2:  'http://localhost:3000/remoteEntry.js', 
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
