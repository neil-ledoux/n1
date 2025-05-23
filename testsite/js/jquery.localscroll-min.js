/*!
 * localScroll.js – Modernized version of jQuery.localScroll
 * Requires jQuery and jQuery.scrollTo
 * 
 * Author: Adapted for modern use from Ariel Flesler's plugin
 */
(function($) {
  $.fn.localScroll = function(options) {
    options = $.extend({
      duration: 2000,
      axis: 'y',
      target: window,
      stop: true,
      hash: true,
      offset: 0,
      easing: 'swing'
    }, options);

    return this.each(function() {
      const $container = $(this);

      $container.find('a[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');
        const target = $(href);

        if (target.length) {
          e.preventDefault();

          if (options.stop) {
            $(options.target).stop(true);
          }

          $(options.target).scrollTo(target, options.duration, {
            axis: options.axis,
            offset: options.offset,
            easing: options.easing,
            onAfter: function() {
              if (options.hash) {
                history.pushState(null, null, href);
              }
            }
          });
        }
      });
    });
  };

  // Auto-initialize for $('body') if desired
  $(function() {
    $('body').localScroll(); // You can pass options here if needed
  });
})(jQuery);
