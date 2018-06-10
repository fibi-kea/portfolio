/*! swapp text */
$(window).on("load", start);

function start() {
    console.log("Start");

    $("#header2").addClass("hidden");
    $("#header").removeClass("hidden");
    setTimeout(header_02, 4500);
}

function header_02() {
    console.log("header_02");

    $("#header2").removeClass("hidden");
    $("#header").addClass("hidden");
    setTimeout(start, 6000);
}

/*! Fade */
$('.fade').click(function (e) {
    e.preventDefault();
    newLocation = this.href;
    $('#wrapper').fadeOut('slow', newpage);
});

function newpage() {
    window.location = newLocation;
}


$(document).ready(function () {
    $('#wrapper').fadeIn('slow');

});

/*! klik paa div */
$(".figcaption").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

$(".figcaption").hover(function () {
    $(this).css('cursor', 'pointer');
}, function () {
    $(this).css('cursor', 'auto');
});


$(".click01").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

$(".click01").hover(function () {
    $(this).css('cursor', 'pointer');
}, function () {
    $(this).css('cursor', 'auto');
});

/*! scroll */
