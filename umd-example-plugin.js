// Example plugin
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery/core'], factory);
	} 
	else {
		// Browser globals
		factory(jQuery);
	}
} (function ($) {
	$.fn.jqueryPlugin = function () {};
}));
