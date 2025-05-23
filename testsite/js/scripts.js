$(document).ready(function(){

//		-----------------------------------
// 		 prevent pointless tooltips (esp. on IE)

		$('img').attr("title", "");
		$('img').attr("alt", "");
		$('nav a, #nav-sub a').attr("title", "");

//		-----------------------------------
// 		masonry layout (home page thumbs)

		var $container = $('ul.thumbs');
			$container.imagesLoaded(function(){
			  $container.masonry({
			    itemSelector : 'li'
			  });
			});

//		-----------------------------------
// 		animated scrolling

		// scroll vertically
		$.localScroll.defaults.axis = 'y';
		// scroll initially if there's a hash (#something) in the url
		$.localScroll.hash({
			target: 'body', // Could be a selector or a jQuery object too.
			axis: 'y',
			offset: -80,
			queue:true,
			duration:800
		});
		// make whole <body> tag live and  and identify
		$.localScroll({
			target: 'body',
			queue: true,
			items:'div', // Selector to the items
			hash: true,
			offset: -80,
			navigation:'a.animate',
			duration:800,
			force:false,
			onBefore:function( e, anchor, $target ){
				},
			onAfter:function( anchor, settings ){
				}
		});




}); // end doc.ready


$(window).load(function() {
	$container.masonry({
	    itemSelector : 'li'
  	});
})

//		-----------------------------------
// 		hide/show details link depending on scroll position

		$(window).scroll(function(){

			// pick up screen size via dummy media query set on body
			var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

			// scroll position
			var y = $(window).scrollTop();

			if ( (size =='wider') || (size =='widest') ) {

					if( y >= 400 ) {
						$("p.view-details").fadeOut(20, function() {
							$(".detail-nav").fadeIn(200);
						});
					}
					if( y < 400 ) {
						$(".detail-nav").fadeOut(20, function() {
							$("p.view-details").fadeIn(200);
						});

					}
				}
			});
