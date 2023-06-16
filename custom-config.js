const webpack = require('webpack');
const path = require('path');

// use dotenv to read variables
const dotenv = require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

// load variables with DefinePlugin, it will handle the replacement job
module.exports = (config, opts, context) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),  // variables have to be stringfied
    }),
  );

  return config;
};