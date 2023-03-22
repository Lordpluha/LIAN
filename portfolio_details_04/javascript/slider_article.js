// Переменные для кода
    // Данный слайд (при окончании загрузки (изменяемая переменная))
var slideNow = 2;
    // 
var navBtnId = 0;

var translateWidth = 0;

// Длинна "наследников" слайдера
var slideCount = $(".slider_tape").children().length;

// Html элементы
var but_next = $(".slider2").find(".article_opt").find(".next");
var but_prev = $(".slider2").find(".article_opt").find(".prev");

    // Функция-вперед
function nextSlide() {
	// Проверка "На грани"
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $(".slider_tape").css("transform", "translate(0, 0)");
        slideNow = 1;
    }
    // Проверка "нормальные порядок"
    else {
        translateWidth = -$(".slider_view").width() * (slideNow);
        $(".slider_tape").css({
            "transform": "translate(" + translateWidth + "px, 0)",
            "-webkit-transform": "translate(" + translateWidth + "px, 0)",
            "-ms-transform": "translate(" + translateWidth + "px, 0)"
        });
        slideNow++;
    }
}

    // Функция назад
function prevSlide() {
	// Проверка "На грани"
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$(".slider_view").width() * (slideCount - 1);
        $(".slider_tape").css({
            "transform": "translate(" + translateWidth + "px, 0)",
            "-webkit-transform": "translate(" + translateWidth + "px, 0)",
            "-ms-transform": "translate(" + translateWidth + "px, 0)"
        });
        slideNow = slideCount;
    }
    // Проверка "нормальные порядок"
    else {
        translateWidth = -$(".slider_view").width() * (slideNow - 2);
        $(".slider_tape").css({
            "transform": "translate(" + translateWidth + "px, 0)",
            "-webkit-transform": "translate(" + translateWidth + "px, 0)",
            "-ms-transform": "translate(" + translateWidth + "px, 0)"
        });
        slideNow--;
    }
}

var i = 0;
var op_img_h = ".5";

function setGreyCol(i) {
	$(".d_" + i + ".b_" + i).hover(function() {
		$(".d_" + i + ".b_" + i).css('opacity', op_img_h);
	}, function() {
		$(".d_" + i + ".b_" + i).css('opacity', '1');
	});
}

$(document).ready(function() {
    for (i; i <= 4; i++) {
		$(".select_prev").find(".grey_bg" + i).find('.d_' + i).addClass('b_' + i);
		$(".preview").find(".c_" + i).addClass('b_' + i);
		setGreyCol(i);
	}
	
    // Определение кнопок вперед/назад
        // Кнопка вперед
    but_next.click(function() {
    	nextSlide();
    });
        // Кнопка назад
    but_prev.click(function() {
    	prevSlide();
    });
});
