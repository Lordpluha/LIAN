// Переменные для кода
    // Данный слайд (при окончании загрузки (изменяемая переменная))
var slideNow = 2;
    // Интервал для авто смены слайдов
var slideInterval = 3000;
    // 
var navBtnId = 0;
var translateWidth = 0;
    // Длинна "наследников" слайдера
var slideCount = $('.slides_tape').children().length;

// Определение функций для смены слайдов
function checkButDot() {
    if (slideNow == 1) {
        active1();
    }
    else if (slideNow == 2) {
        active2();
    }
    else if (slideNow == 3) {
        active3();
    }
}

function active1() {
    var navBtnId = 0;
    $(".passive1").css({
        display: 'none'
    });
    $(".active1").css({
        display: 'block'
    });
    $(".passive3").css({
        display: 'block'
    });
    $(".active3").css({
        display: 'none'
    });
    $(".passive2").css({
        display: 'block'
    });
    $(".active2").css({
        display: 'none'
    });
    checkSlide(navBtnId);
}
function active2() {
    var navBtnId = 1;
    $(".passive2").css({
        display: 'none'
    });
    $(".active2").css({
        display: 'block'
    });
    $(".passive1").css({
        display: 'block'
    });
    $(".active1").css({
        display: 'none'
    });
    $(".passive3").css({
        display: 'block'
    });
    $(".active3").css({
        display: 'none'
    });
    checkSlide(navBtnId);
}
function active3() {
    var navBtnId = 2;
    $(".passive3").css({
        display: 'none'
    });
    $(".active3").css({
        display: 'block'
    });
    $(".passive2").css({
        display: 'block'
    });
    $(".active2").css({
        display: 'none'
    });
    $(".passive1").css({
        display: 'block'
    });
    $(".active1").css({
        display: 'none'
    });
    checkSlide(navBtnId);
}

    // Функция-вперед
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slides_tape').css('transform', 'translate(0, 0)');
        slideNow = 1;
    }
    else {
        translateWidth = -$('.view_slide').width() * (slideNow);
        $('.slides_tape').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
    checkButDot();
}

    // Функция назад
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.view_slide').width() * (slideCount - 1);
        $('.slides_tape').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    }
    else {
        translateWidth = -$('.view_slide').width() * (slideNow - 2);
        $('.slides_tape').css({
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
    checkButDot();
}
function checkSlide(navBtnId) {
    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('.view_slide').width() * (navBtnId);
        $('.slides_tape').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = navBtnId + 1;
    }
}

// Основной код
$(document).ready(function() {
    active1();

    // Авто смена картинки при отсутствии курсора наведенного на слайдер
	var switchInterval = setInterval(nextSlide, slideInterval);
    $(" #nav").hover(function() {
        clearInterval(switchInterval);
    },
    function() {
        switchInterval;
    });
    
    
    // Определение кнопок вперед/назад
        // Кнопка вперед
    $(".but_previous").click(function() {
    	prevSlide();
    });
        // Кнопка назад
    $(".but_next").click(function() {
    	nextSlide();
    });
    // Кнопки "dots"
    $(".b1").click(function() {
        active1();
    });
    $(".b2").click(function() {
        active2();
    });
    $(".b3").click(function() {
        active3();
    });
});

