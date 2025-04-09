(function($) {

$(function() {
 
  var isTouchDevice = 'ontouchstart' in document.documentElement;

  
  ///////////////////////
  // Make the utility bar expandable/collapsible
  var context = $("#left-sidebar");
  $('.utilitybar:not(.nh)',context).find('.content').hide()
    .end().find('h2').on('click', function() {
      e = $(this).parent();
      var down = e.hasClass('down'); 
      e.parent().find('.utilitybar.down').removeClass('down').find('.content').slideUp(200);
            
      if(!down) {
        e.find('.content').show();
        e.addClass('down');
      }
    });
    
  ////////////////////////  
  // Drop Down Main Menu

 	$('#dropmain').css('width',$('header').width() + "px");

  	$('#menu-home-page').click(function(e){
  		e.stopPropagation();
  	});

	$('#show_menu').click(function(event) {
		if($('#dropmain:visible').length && $('#show_menu').hasClass('noclick')==false) {
		  $('#header-left').removeClass('active');
		  $('#dropmain').slideUp(50).removeClass('active');
		  return false;
		}else{
		  $('#dropmain').slideDown(50).addClass('active');
                       $('#header-left').addClass('active');
				   return false;
		}      
	});
	
    $('#header-left').hoverIntent({    
       sensitivity: 2,  // number = sensitivity threshold (must be 1 or higher)    
       interval: 50,    // number = milliseconds for onMouseOver polling interval    
       over: function () {
       	 $('#show_menu').addClass('noclick');
         $('#dropmain').slideDown(50).addClass('active');
         $('#header-left').addClass('active');
         setTimeout(function(){$('#show_menu').removeClass('noclick');}, 250);
       },    
       timeout: 250,    // number = milliseconds delay before onMouseOut    
       out: function() {
          $('#dropmain').slideUp(50).removeClass('active');
          $('#header-left').removeClass('active');
       },     
    });

  ///////////////////////
  // Navigate on click
	$('ul.news-menu li, div.node-slim-teaser').click(function(e){
  	var $target = $(e.target);
  	var url		= $(this).find("a").attr("href");
  	if (!$target.is('a')) {
  		window.location = url;
  	}
	});



 /////////////////////////////
  // Sticky Header
  


});
  
})(jQuery);
