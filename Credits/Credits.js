var Scroll = "0";
(function(){
	Scroll++;
	
	window.scrollTo({
		top: Scroll
	});
	
	setTimeout(arguments.callee, 10)
})();