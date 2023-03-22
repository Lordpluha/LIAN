var i = 0;
var op_img_h = ".5";


// Header



// Nav



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
// Footer



$(document).ready(function() {
	// Header
	


	// Nav



	// Article
	for (i; i <= 10; i++) {
		$(".item_" + i).find('.img_s_l').addClass('box_' + i);
		$(".item_" + i).find('.plus').addClass('b_' + i);
		setClassFunc(i);
	}
	// Footer



});