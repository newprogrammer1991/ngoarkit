window.$ = window.jQuery = require('jquery');
//require("bootstrap");

module.exports = function(vars) {

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

//  $("#authpage").each(function(){
//		console.log('%c hello M02-login init! ', 'background: #A3C5E9; color: white');
//  });

};