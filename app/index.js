console.log("starting application..");

//const electronHot = require('electron-hot-loader');

//electronHot.install();
//electronHot.watchJsx(['src/**/*.jsx']);
//electronHot.watchCss(['src/assets/**/*.css']);

require('babel-polyfill');

require('./index.jsx');