let l = 100;
let el = $('#carusel');
let scroll = true;

function left() {
    $('.line').css('width', '0');
    $('.main div').css('opacity', '0') 
    setTimeout(() => {
        $('.line').animate({ 'width': '35px' }, 1500, $.bez([.78, -0.01, .59, .99]));
        $('.main div').animate({ 'opacity': '1' }, 1000, $.bez([.78, -0.01, .59, .99]));
    }, 3500);

    if (l == 1300) {
        l = -100;
    }
    el.animate({ 'left': `-${l += 200}vw` }, 3000, $.bez([.78, -0.01, .59, .99]));

    setTimeout(() => {scroll = true}, 3500);
}
$('.next-btn').click(left);
left();
setInterval(left, 15000);

$('body').mousewheel(function () {
    if (scroll) {
        scroll = false;
        left();
    }
})

const aboutZ = 10;
const contactZ = 20;
const galleryZ = 30;


function about() {
    $('.sec1').css('z-index', '900');

    $('section.active').css('z-index', '700');
    $('.sec1').removeClass('active');
    $('.sec2').removeClass('active');
    $('.sec3').removeClass('active');
    $('.sec1').addClass('active');

    $('ul li a').removeClass('active');    
    $('#about a').addClass('active');
    $('.sec1').animate({ 'top': '0' }, 2000, $.bez([.78, -0.01, .59, .99]));
    setTimeout(() => {
        $('.sec2').css('top', '100vh').css('z-index', contactZ);
        $('.sec3').css('top', '100vh').css('z-index', galleryZ);
    }, 2100);
}
function gallery() {
    $('.sec3').css('z-index', '800');

    $('section.active').css('z-index', '700');
    $('.sec1').removeClass('active');
    $('.sec2').removeClass('active');
    $('.sec3').removeClass('active');
    $('.sec3').addClass('active');

    $('ul li a').removeClass('active');
    $('#gallery a').addClass('active');
    $('.sec3').animate({ 'top': '0' }, 2000, $.bez([.78, -0.01, .59, .99]));    
    setTimeout(() => {
        $('.sec2').css('top', '100vh').css('z-index', contactZ);
        $('.sec1').css('top', '100vh').css('z-index', aboutZ);
    }, 2100);
}
function contact() {
    $('.sec2').css('z-index', '800');

    $('section.active').css('z-index', '700');
    $('.sec1').removeClass('active');
    $('.sec2').removeClass('active');
    $('.sec3').removeClass('active');
    $('.sec2').addClass('active');

    $('ul li a').removeClass('active');
    $('#contact a').addClass('active');
    $('.sec2').animate({ 'top': '0' }, 2000, $.bez([.78, -0.01, .59, .99]));    
    setTimeout(() => {
        $('.sec3').css('top', '100vh').css('z-index', contactZ);
        $('.sec1').css('top', '100vh').css('z-index', aboutZ);        
    }, 2100);
}
function home() {
    $('.sec1').css('z-index', aboutZ);
    $('.sec2').css('z-index', contactZ);
    $('.sec3').css('z-index', contactZ);

    $('ul li a').removeClass('active');
    $('#home a').addClass('active');

    $('.sec1').animate({ 'top': '100vh' }, 2000, $.bez([.78, -0.01, .59, .99]));
    $('.sec2').animate({ 'top': '100vh' }, 2000, $.bez([.78, -0.01, .59, .99]));
    $('.sec3').animate({ 'top': '100vh' }, 2000, $.bez([.78, -0.01, .59, .99]));

}
$('#home, .home').click(home);
$('#about, .about').click(about);
$('#gallery, .gallery').click(gallery);
$('#contact, .contact').click(contact);


$('.sec3 img').click(function (ev) {
    console.log($(`#${ev.target.id}`).attr('src'));
    $('.modal img').attr('src', $(`#${ev.target.id}`).attr('src'));
    $('.modal').css('display', 'block').animate({'opacity': '1'}, 1500);
})

$('.modal').click(function (ev) {
    console.log(ev.target.localName);
    if (ev.target.localName == 'div') {
        $('.modal').animate({ 'opacity': '0' }, 1000);
        setTimeout(() => {
            $('.modal').css('display', 'none')
        }, 1050);    
    }
})

$('#menu_checkbox, #rm a').click(function () {
    $('#rm').toggleClass('rmactive');
    $('#menu_checkbox').toggleClass('checked');
});
