window.$ = window.jQuery = require('jquery');
require("bootstrap");

/* Cookies */
window.Cookies = require("js-cookie");

/* Project init */
global.app = function () {
  require("./modules/E003-scrollbar")();
	require("./modules/M02-login")();
	//...
	//test
	require("./modules/T01-messenger")();
};

$(function(){
  global.app(' ');
});


