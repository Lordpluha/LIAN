// Переменные для кода
    // Данный слайд (при окончании загрузки (изменяемая переменная))
var slideNow = 1;
    // Интервал для авто смены слайдов
var slideInterval = 5000;

var translateHeight = 0;
    // Длинна "наследников" слайдера
var slideCount = $('.slides_tape').children().length; // 2

// Функция-вперед
function nextSlide() {
	// Проверка "На грани ли находится переход?"; Если да то, передвижение на первый слайд
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.slides_tape').css('transform', 'translate(0, 0)');
        slideNow = 1;
    }
    // Если переход не на грани, то
    else {
        var translateHeight = -$('.slides_tape').find('li').height() * (slideNow);
        $('.slides_tape').css({
            'transform': 'translate(0,' + translateHeight + 'px)',
            '-webkit-transform': 'translate(0,' + translateHeight + 'px)',
            '-ms-transform': 'translate(0,' + translateHeight + 'px)'
        });
        slideNow++;
    }
}

// Основной код
$(document).ready(function() {
    // Авто смена картинки
    setInterval(nextSlide, slideInterval);
});