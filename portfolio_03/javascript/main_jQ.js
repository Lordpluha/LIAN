var string_tipeIt = "Duis autern vel eum iriure dolor in henderit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilis.";
var i = 0;
var op_img_h = ".5";

// Article
function setClassFunc(i) {
	$(".plus.b_" + i).hover(function() {
		$(".img_s_l.box_" + i).css({
			opacity: op_img_h
		});
	}, function() {
		$(".img_s_l.box_" + i).css({
			opacity: "1"
		});
	});
	$(".plus.b_" + i).hover(function() {
		$(".plus.b_" + i).css({
			visibility: "visible"
		});
	}, function() {
		$(".plus.b_" + i).css({
			visibility: "hidden"
		});
	});

	$(".img_s_l.box_" + i).hover(function() {
		$(".img_s_l.box_" + i).css({
			opacity: op_img_h
		});
	}, function() {
		$(".img_s_l.box_" + i).css({
			opacity: "1"
		});
	});

	$(".img_s_l.box_" + i).hover(function() {
		$(".plus.b_" + i).css({
			visibility: "visible"
		});
	}, function() {
		$(".plus.b_" + i).css({
			visibility: "hidden"
		});
	});
}

jQuery(document).ready(function() {
	// Nav
	// Код для красивой печати в навигации
	$(".title").find('p').typeIt({
		strings: string_tipeIt,
	   	speed: 40,
	   	autoStart: false
	});

	// Article
	for (i; i <= 10; i++) {
		$(".item_" + i).find('.img_s_l').addClass('box_' + i);
		$(".item_" + i).find('.plus').addClass('b_' + i);
		setClassFunc(i);
	}
});