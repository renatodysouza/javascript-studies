# Studies Javascript
### Initial Stack

  - npm init
  - npm install eslint --save
  - editor config
  - hooks no git

  configure lint: 
   -  command  eslint --init
  
  add in package json ` "lint":"./node_modules/.bin/eslint src/*js"`

  add hooks:
  npm install husk --save-dev
  pre-commit or
  pre-push

  install webpack
  npm install webpack --save-dev
  create webpack.config.js
  config plugins 
  --devtool source-map

  create server 
  npm webpack-dev-server --save-dev

  install babel
  babel-loader babel-core babel-preset-es2015-native-modules
  create .babelrc


  spies, stubs e mocks

  spies 
  method was called, what was paramameters
  how many times was called
  if method was called inside an other method

  stub 
  control behaviour method
  test in async code

  mocks 
  fake methods

  tests
  Mocha, chai, sinon (spies, stubs, mocks)
  npm install mocha chai --save-dev

  reporters
  npm run test --reporter

  --bail   run first test broken

  covered 
  npm install nyc --save-dev
  


