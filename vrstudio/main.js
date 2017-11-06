window.onload = function() {
    var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
function nextSlide() {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}};
function showHide(element_id) {
    if (document.getElementById(element_id)) {
        var obj = document.getElementById(element_id);
        if (obj.style.display != "block") {
            obj.style.display = "block";
        }
        else obj.style.display = "none";
    }
    else alert("Элемент с id: " + element_id + " не найден!");
};
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

