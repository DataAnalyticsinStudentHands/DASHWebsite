slideIndex = 0;
secIndex = -1;

$(document).ready(function() {
	secIndex = $(".navbar-nav .active").index();
	slideIndex = $(".carousel-indicators .active").index();
	document.getElementById("stats").innerHTML=slideIndex;
	changeBG();
});
$(window).scroll(function() {
	secIndex = $(".navbar-nav .active").index();
	document.getElementById("statsec").innerHTML=secIndex;
	changeBG();
});
$('#fullscreen-slider').on('slid.bs.carousel', function () {
	slideIndex = $(".carousel-indicators .active").index();
	document.getElementById("stats").innerHTML=slideIndex;
	changeBG();
});
$( ".navbar-nav .page-scroll" ).click(function() {
  	secIndex = $(".navbar-nav .active").index();
	document.getElementById("statsec").innerHTML=secIndex;
	changeBG();
});
function changeBG() {

	stattrig = "00";
	stattrig1 = "0-10";
	if (secIndex==-1) {
		switch(slideIndex) {
			case 0:
				stattrig = "00";
				$("body").backstretch("images/bg-10.jpg");
				break;
			case 1:
				stattrig = "01";
				$("body").backstretch("images/bg-11.jpg");
				break;
			case 2:
				stattrig = "02";
				$("body").backstretch("images/bg-12.jpg");
				break;
			default:
				stattrig = "00";
				$("body").backstretch("images/bg-10.jpg");
				break;
		};		
	} else {
		switch(secIndex) {
			case 0:
				stattrig1 = "000";
				$("body").backstretch("images/bg0.jpg");
				break;
			case 1:
				stattrig1 = "010";
				$("body").backstretch("images/bg1.jpg");
				break;
			case 2:
				stattrig1 = "020";
				$("body").backstretch("images/bg2.jpg");
				break;
			case 3:
				stattrig1 = "030";
				$("body").backstretch("images/bg3.jpg");
				break;
			default:
				stattrig1 = "000";
				$("body").backstretch("images/bg-10.jpg");
				break;
		};
	};
	document.getElementById("stattrig").innerHTML=stattrig+","+stattrig1+"done";
};
// $("#outside").click(function(e) {
// e.preventDefault();
$("body").backstretch('http://dl.dropbox.com/u/515046/www/outside.jpg');
// });

// $("#cheers").click(function(e) {
// e.preventDefault();
$("body").backstretch('http://dl.dropbox.com/u/515046/www/cheers.jpg');
// });
