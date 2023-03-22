var string_tipeIt = "Duis autern vel eum iriure dolor in henderit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilis.";

jQuery(document).ready(function() {
	// Код для красивой печати в навигации
	$(".title").find('p').typeIt({
		strings: string_tipeIt,
	   	speed: 40,
	   	autoStart: false
	});

	var position_ph_1 = Math.round($(".Photoshop").find('.dot.w1').position().left);
	$(".Photoshop").find('.prog_proc').css({
		left: position_ph_1+4
	});

	var position_ph_2 = Math.round($(".Branding").find('.dot.w2').position().left);
	$(".Branding").find('.prog_proc').css({
		left: position_ph_2+4
	});

	var position_ph_3 = Math.round($(".Photography").find('.dot.w3').position().left);
	$(".Photography").find('.prog_proc').css({
		left: position_ph_3+4
	});

	var position_ph_4 = Math.round($(".Web_Design").find('.dot.w4').position().left);
	$(".Web_Design").find('.prog_proc').css({
		left: position_ph_4+4
	});
});