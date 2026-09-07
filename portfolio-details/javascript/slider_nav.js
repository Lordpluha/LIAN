var hgf = 1;
var block = $("nav#nav").find("section.nav1").find("div.title_block_img");

function nextImg() {
	if (hgf == 1) {
		$("nav#nav").find("section.nav1").find("div.img1").css("opacity", "1");
		$("nav#nav").find("section.nav1").find("div.img2").css("opacity", "0");
		--hgf;
	}
	else if (hgf == 0){
		$("nav#nav").find("section.nav1").find("div.img2").css("opacity", "1");
		$("nav#nav").find("section.nav1").find("div.img1").css("opacity", "0");
		++hgf;
	}
}

$(document).ready(function() {
	setInterval(nextImg, 5000);
});