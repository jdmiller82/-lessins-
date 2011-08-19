(function($){
	
// The DOM is now ready
$(function() {
	
	$('.slider-button').toggle(function(){
		$(this).addClass('on').html('ON');
	},function(){
		$(this).removeClass('on').html('OFF');
	});

});

})( jQuery.noConflict() ); // Pass in jQuery so we can safely use the $ alias within this block
