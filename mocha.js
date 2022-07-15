// mocha --reporter spec \"./tests/**/*.js\"
const Mocha = require("mocha");

console.log("hello mocha");


require('node-self');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.window = new JSDOM().window;
global.self = global.window;
global.document = global.window.document;
// // Only necessary when using "canvas" as image type iirc
// // global.Image = (Canvas as any);
// global.XMLSerializer = global.window.XMLSerializer;
// require('@videsk/window-node-polyfill');


new Mocha({})
  .addFile("./tests/layoutBuilder.js")
  .run();