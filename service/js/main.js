$(function () {

    $('.aMenu').bind('click.smoothscroll', function () {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({ scrollTop: bl_top }, 700);
        return false;
    });


});

$('#headerText').css('margin-top', (($(window).height() / 2) - $('#headerText').height()) + 'px')

let n = 1;
$('#arrows span').click(function (e) {
    let el = $('.vertical-slider>div');
    let top = el.css('top');
    top = (top != 0) ? +top.slice(0, top.length-2) : top; 
    let length = $('.vertical-slider>div>div').length;

    if (e.target.id == 'top' && !$('#top').hasClass('stop')) {
        el.css('top', (top + 715) + 'px');
        --n;
        $('#top').removeClass('stop');
        $('#bottom').removeClass('stop');

        if (n == 1) {
            $('#top').addClass('stop') 
        }
    } else if (e.target.id == 'bottom' && !$('#bottom').hasClass('stop')) {
        el.css('top', (top - 715) + 'px');
        ++n;
        $('#top').removeClass('stop');
        $('#bottom').removeClass('stop');

        if (n == length) {
            $('#bottom').addClass('stop')
        }
    }
});

$('.sec6 button').click(function () {
    $(this).toggleClass('is_active')    
});

$('#menu_checkbox, #rm a').click(function () {
    $('#rm').toggleClass('rmactive');  
    $('#menu_checkbox').toggleClass('checked');  
});

// $(function () {
//     $('a[data-target^="anchor"]').on('click', function (e) {
//         console.log($(''));

//         e.preventDefault();
//         $('body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 700);
//     });
// });






