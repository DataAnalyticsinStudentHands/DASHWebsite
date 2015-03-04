
// ***********************************
// Backstretch - Slider on Background
//
//  Note :  make sure  use this  http://bootstrapwizard.info/Theme/Fullscreen/images/bg4.jpg"  when on server  but you can simply use  "images/bg1.jpg"  if you are on localhost
//
// ***********************************
$(document).ready(function() {
	// make all slide the same height
	var items = $('.carousel-inner .item'), //grab all slides
	    heights = [], //create empty array to store height values
	    tallest; //create variable to make note of the tallest slide
	var heightstat=0;
	if (items.length) {
	    function normalizeHeights() {
	        items.each(function() { //add heights to array
	            heights.push($(this).height());
	            // alert("slide addheight") s
	        });
	        tallest = Math.max.apply(null, heights); //cache largest value
	        items.each(function() {
	            $(this).css('min-height',tallest + 'px');
	            // document.getElementById("statheight").innerHTML+=2;
	        });
	    };
	    normalizeHeights();
	    $(window).on('resize orientationchange', function () {
	        tallest = 0, heights.length = 0; //reset vars
	        items.each(function() {
	            $(this).css('min-height','0'); //reset min-height
	            // document.getElementById("statheight").innerHTML+=1;
	        }); 
	        normalizeHeights(); //run it again 
	    });
	};
	// var Hitems = $('.featured-box .featured-box-sameHeight'),
	//     Hheights = [],
	//     Htallest;
	// var Hheightstat=0;
	// if (Hitems.length) {
	//     function normalizeHeights() {
	//         Hitems.each(function() {
	//             Hheights.push($(this).height());
	//         });
	//         Htallest = Math.max.apply(null, Hheights);
	//         Hitems.each(function() {
	//             $(this).css('min-height',Htallest + 'px');
	//         });
	//     };
	//     normalizeHeights();
	//     $(window).on('resize orientationchange', function () {
	//         Htallest = 0, Hheights.length = 0;
	//         Hitems.each(function() {
	//             $(this).css('min-height','0');
	//         }); 
	//         normalizeHeights();
	//     });
	// }
});
// $(document).ready(function() {
// 	var Spanitems = $('.featured-box .featured-box-sameHeight .featured-info span'),
// 	    heights = [],
// 	    tallest;
// 	var heightstat=0;
// 	if (Spanitems.length) {
// 	    function normalizeHeights() {
// 	        Spanitems.each(function() {
// 	            heights.push($(this).height());
// 	        });
// 	        tallest = Math.max.apply(null, heights);
// 	        Spanitems.each(function() {
// 	            $(this).css('min-height',tallest + 'px');
// 	        });
// 	    };
// 	    normalizeHeights();
// 	    $(window).on('resize orientationchange', function () {
// 	        tallest = 0, heights.length = 0;
// 	        Spanitems.each(function() {
// 	            $(this).css('min-height','0');
// 	        }); 
// 	        normalizeHeights();
// 	    });
// 	}
// });
$(document).ready(function() {
	
});
$(window).load(function() {
	setTimeout(function(){
	    $('body').addClass('loaded');
	}, 250);
	var Hitems = $('.featured-box .featured-box-sameHeight'),
	    hheights = [],
	    htallest;
	var hheightstat=0;
	if (Hitems.length) {
	    function normalizeHeights() {
	        Hitems.each(function() {
	            hheights.push($(this).height());
	        });
	        htallest = Math.max.apply(null, hheights);
	        Hitems.each(function() {
	            $(this).css('min-height',htallest + 'px');
	        });
	    };
	    normalizeHeights();
	    $(window).on('resize orientationchange', function () {
	        htallest = 0, hheights.length = 0;
	        Hitems.each(function() {
	            $(this).css('min-height','0');
	        }); 
	        normalizeHeights();
	    });
	};
	// var Spanitems = $('.featured-box .featured-box-sameHeight .featured-info span'),
	//     sheights = [],
	//     stallest;
	// var sheightstat=0;
	// if (Spanitems.length) {
	//     function normalizeHeights() {
	//         Spanitems.each(function() {
	//             sheights.push($(this).height());
	//         });
	//         stallest = Math.max.apply(null, sheights);
	//         Spanitems.each(function() {
	//             $(this).css('min-height',stallest + 'px');
	//         });
	//     };
	//     normalizeHeights();
	//     $(window).on('resize orientationchange', function () {
	//         stallest = 0, sheights.length = 0;
	//         Spanitems.each(function() {
	//             $(this).css('min-height','0');
	//         }); 
	//         normalizesHeights();
	//     });
	// };
});  
// **************************************
// jQuery to collapse the navbar on scroll
// **************************************


$(window).resize(function(){
	if ($(window).width() < 976){	
		$('.navbar-collapse a').click(function (e) {
			$('.navbar-collapse').collapse('toggle');
		});
	}	
});

// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


// ****************************************************************
// owl-caurosel
// ****************************************************************			
			
$(document).ready(function() {
	// $(".owl-controls.clickable").css("width",$(window).width());
	$('#featured-list').owlCarousel({
		slideSpeed: 400,
		paginationSpeed: 400,
		rewindSpeed: 600,
		// navigation:true,
		// autoHeight : true,
		// navigationText: [
		// 	"<span class='icon-chevron-left icon-white'><</span>",
		// 	"<span class='icon-chevron-right icon-white'>></span>"
		// ],
		items : 4, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,2], //1 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	$('#partner-list').owlCarousel({
		slideSpeed: 400,
		paginationSpeed: 400,
		rewindSpeed: 600,
		// navigation:true,
		// autoHeight : true,
		// navigationText: [
		// 	"<span class='icon-chevron-left icon-white'><</span>",
		// 	"<span class='icon-chevron-right icon-white'>></span>"
		// ],
		items : 6, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //1 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	// $(".next").click(function(){
	// 	owl.trigger('owl.next');
	// })
	// $(".prev").click(function(){
	// 	owl.trigger('owl.prev');
	// })
});

// ***********************************
// totop
// ***********************************

// $(document).ready(function(){
// 	$().UItoTop({ easingType: 'easeOutQuart' });
// });	
$('#toHome').click(function() {
	$('html, body').animate({ scrollTop: 0 }, "slow");
});

// ***********************************
// pageloader
// ***********************************
$(window).load(function(){
	if($('.preloader').length > 0){
		$('.preloader').fadeOut(1500);
	}
});


// ***********************************
// stop video when modal close
// ***********************************

// $(document).ready(function(){
//   $("#video-modal").on('hide.bs.modal', function(evt){
//     var player = $(evt.target).find('iframe'),
//         vidSrc = player.prop('src');
//     player.prop('src', ''); 
//     player.prop('src', vidSrc);
//   });
// });

	

// ***********************************
// magnificPopup
// ***********************************	

// $('.gallery-item').magnificPopup({
//   type: 'image',
//   gallery:{
// 	enabled:true
//   }
// });



// ****************************************************************
// wow - for animation together with animate.css
// ****************************************************************	
	
// $(document).ready(function(){
// 	wow = new WOW(
// 	  {
// 		animateClass: 'animated',
// 		offset:       150
// 	  }
// 	);
// 	wow.init();
// });


// ****************************************************************
// counterUp
// ****************************************************************

// $(document).ready(function( $ ) {
// 	if($("span.count").length > 0){	
// 		$('span.count').counterUp({
// 			delay: 10,
// 			time: 1000 
// 		});
// 	}
// });


// ****************************************************************
// mix teamMember sort team member
// ****************************************************************
var buttonFilter = {
  
  // Declare any variables we will need as properties of the object
  
  $filters: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  // The "init" method will run on document ready and cache any jQuery objects we will need.
  
  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    self.$filters = $('#Filters');
    self.$reset = $('#Reset');
    self.$container = $('#teamMems');
    
    self.$filters.find('fieldset').each(function(){
      var $this = $(this);
      
      self.groups.push({
        $buttons: $this.find('.filter'),
        $dropdown: $this.find('select'),
        active: ''
      });
    });
    
    self.bindHandlers();
  },
  
  // The "bindHandlers" method will listen for whenever a button is clicked. 
  
  bindHandlers: function(){
    var self = this;
    
    // Handle filter clicks
    
    self.$filters.on('click', '.filter', function(e){
      e.preventDefault();
      
      var $button = $(this);
      
      // If the button is active, remove the active class, else make active and deactivate others.
      
      $button.hasClass('active') ?
        $button.removeClass('active') :
        $button.addClass('active').siblings('.filter').removeClass('active');
      
      self.parseFilters();
    });
    
    // Handle dropdown change
    
    self.$filters.on('change', function(){
      self.parseFilters();           
    });
    
    // Handle reset click
    
    self.$reset.on('click', function(e){
      e.preventDefault();
      
      self.$filters.find('.filter').removeClass('active');
      self.$filters.find('.show-all').addClass('active');
      self.$filters.find('select').val('');
      
      self.parseFilters();
    });
  },
  
  // The parseFilters method checks which filters are active in each group:
  
  parseFilters: function(){
    var self = this;
 
    // loop through each filter group and grap the active filter from each one.
    
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.length ? 
        group.$buttons.filter('.active').attr('data-filter') || '' :
        group.$dropdown.val();
    }
    
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  
  concatenate: function(){
    var self = this;
    
    self.outputString = ''; // Reset output string
    
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    
    // If the output string is empty, show all rather than none:
    
    !self.outputString.length && (self.outputString = 'all'); 
    
    console.log(self.outputString); 
    
    // ^ we can check the console here to take a look at the filter string that is produced
    
    // Send the output string to MixItUp via the 'filter' method:
    
	  if(self.$container.mixItUp('isLoaded')){
    	self.$container.mixItUp('filter', self.outputString);
	  }
  }
};
  
// On document ready, initialise our code.

$(function(){
      
  // Initialize buttonFilter code
      
  buttonFilter.init();
      
  // Instantiate MixItUp
      
  $('#teamMems').mixItUp({
    controls: {
      enable: false // we won't be needing these
    },
    callbacks: {
      onMixFail: function(){
        // alert('No students were found matching the selected filters.');
      }
    }
  });    
});