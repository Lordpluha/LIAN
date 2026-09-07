var string_tipeIt = 'Duis autern vel eum iriure dolor in henderit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilis.';


jQuery(document).ready(function() {
	// Nav
	// Код для красивой печати в навигации
	$('#nav').find('.nav_block').find('p').typeIt({
		strings: string_tipeIt,
	   	speed: 40,
	   	autoStart: false
	});

	
});