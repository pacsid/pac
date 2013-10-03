$(document).ready(function(){

	//=================================== Sticky nav ===================================//
	$(".search_domain").sticky({topSpacing:0});

 	//=================================== Nav Responsive ===================================//

	    $('#menu').tinyNav({
	       active: 'selected'
	    });

    //=================================== Totop  ===================================//

		$().UItoTop({ 		
			scrollSpeed:500,
			easingType:'linear'
		});

	//=================================== jBar  ===================================//
	
		$('.jBar').hide();
			$('.jRibbon').show().removeClass('up', 300);
			$('.jTrigger').click(function(){
				$('.jRibbon').toggleClass('up', 300);
				$('.jBar').slideToggle();
			});

	//=================================== efect_switcher  ===================================//
		
		jcps.slider(500, '.switcher-panel', '.set2');

	//=================================== Accordion  =================================//
	
		$('.accordion-container').hide(); 
		$('.accordion-trigger:first').addClass('active').next().show();
		$('.accordion-trigger').click(function(){
			if( $(this).next().is(':hidden') ) { 
				$('.accordion-trigger').removeClass('active').next().slideUp();
				$(this).toggleClass('active').next().slideDown();
			}
			return false;
		});


	//=================================== Ligbox  ===================================//	

	    jQuery("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'titlePosition'     : 'over'
	});
	
	jQuery("a[class*='video_lightbox']").click(function(){
		var et_video_href = jQuery(this).attr('href'),
			et_video_link;

		et_vimeo = et_video_href.match(/vimeo.com\/(.*)/i);
		if ( et_vimeo != null )	et_video_link = 'http://player.vimeo.com/video/' + et_vimeo[1];
		else {
			et_youtube = et_video_href.match(/watch\?v=([^&]*)/i);
			if ( et_youtube != null ) et_video_link = 'http://youtube.com/embed/' + et_youtube[1];
		}
		
		jQuery.fancybox({
			'overlayOpacity'	:	0.7,
			'overlayColor'		:	'#000000',
			'autoScale'		: true,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'type'			: 'iframe',
			'centerOnScroll'	: true,
			'speedIn' 			: '700',
			'href'			: et_video_link
		});
		return false;
	});

	
	//=================================== Tooltips =====================================//

		if( $.fn.tooltip() ) {
			$('[rel="tooltip"]').tooltip();
		}
    
    //=================================== Slide =====================================//
		
	$('#slide').camera({
		height: '36%'	       
	});

        
});
	

