document.body.onload = function () {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);


};

let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');
let link = $(".link");
let menu2 = $(".nav--open");

open.addEventListener('click', function() {
    menu.classList.toggle('close');
});


close.addEventListener('click', function() {
    menu.classList.toggle('close');
});

$(function() {
    $('.btn-6')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
});


link.click(function() {
    menu2.addClass('close');
});

 $(".link").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
 });





