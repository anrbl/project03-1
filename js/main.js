$(function () {
    $(window).scroll(function () {
        let sct = $(window).scrollTop()
        sct > 100 ? $('.to_top').fadeIn() : $('.to_top').fadeOut(0);
    });

    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 700);
    });

    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        };
    });


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .dots li').eq(0).addClass('on');
        $('.main_visual .dots li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 300,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/irn6NVUDK-A',
        containment: '#video',
        autoPlay: false,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_video .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.main_video .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });


});