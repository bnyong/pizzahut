$(document).ready(function () {
    // 탑버튼 ____________________________________

    $('#topBtn').hide(); // 탑버튼 숨기기

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    /* Top 버튼 */

    $('#topBtn').click(function () {
        $('html,body').animate({ scrollTop: '0' });
    });

    /* 토글 버튼으로 서브메뉴를 on/off */

    $('#header2 .secUl_6 .allmenu_down').click(function () {
        $(this).toggleClass('mchange'); //addClass + removeClass
        $('#header2 .allmenu').stop().slideToggle('normal'); // slideDown + slideUp
        $('.mchange').attr('opacity', '0');
        $('.secUl_6_1').toggle();
        $('.secUl_6_2').toggle();
    });

    /* 풀다운 메뉴 세부 목록에 오버시 주메뉴 애니메이션 효과 */
    $('.secUl_1').hover(
        function () {
            $('.menuImage').css({ animation: 'menu 10s infinite' });
        },
        function () {
            $('.menuImage').css({ animation: 'none' });
        }
    );
    $('.secUl_2').hover(
        function () {
            $('.couponImage').css({ animation: 'coupon 1s infinite' });
        },
        function () {
            $('.couponImage').css({ animation: 'none' });
        }
    );
    $('.secUl_3').hover(
        function () {
            $('.eventImage').css({ animation: 'event 0.8s infinite' });
        },
        function () {
            $('.eventImage').css({ animation: 'none' });
        }
    );
    $('.secUl_5').hover(
        function () {
            $('.aboutImage').css({ animation: 'about 2s infinite' });
        },
        function () {
            $('.aboutImage').css({ animation: 'none' });
        }
    );

    // 주메뉴 오버시 서브박스 배경색 나오게 함
    $('.allmenu .submenu ul').hover(
        function () {
            $(this).css({ background: 'rgba(0,0,0,0.6)' });
        },
        function () {
            $(this).css({ background: 'transparent' });
        }
    );

    // fade효과
    let img = $('.changeimg ul li');
    let btn = $('.btn ul li');
    let lbtn = $('.side_btn .lbtn');
    let rbtn = $('.side_btn .rbtn');
    let oldidx = 0;
    let idx = 0;
    let img_n = img.length;

    function changeImg(idx) {
        if (oldidx != idx) {
            btn.eq(oldidx).removeClass('active');
            btn.eq(idx).addClass('active');
            img.eq(oldidx).stop(true, true).fadeOut(700);
            img.eq(idx).stop(true, true).fadeIn(700);
        }
        oldidx = idx;
    }

    function changeAuto() {
        idx++;

        if (idx > img_n - 1) {
            idx = 0;
        }
        changeImg(idx);
    }
    timer = setInterval(changeAuto, 3000);

    // 하단버튼 클릭시
    btn.click(function () {
        clearInterval(timer);
        idx = $(this).index();
        changeImg(idx);
        timer = setInterval(changeAuto, 3000);
    });

    // 좌우버튼 클릭시
    rbtn.click(function () {
        clearInterval(timer);
        idx++;
        if (idx > img_n - 1) {
            idx = 0;
        }
        changeImg(idx);
        timer = setInterval(changeAuto, 3000);
    });

    lbtn.click(function () {
        clearInterval(timer);
        idx--;
        if (idx < 0) {
            idx = img_n - 1;
        }
        changeImg(idx);
        timer = setInterval(changeAuto, 3000);
    });

    // 가운데 메뉴 뜨기

    $('.sample_p1').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza1.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p1)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p2').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza2.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p2)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p3').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza3.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p3)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p4').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza4.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p4)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p5').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza5.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p5)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p6').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza6.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p6)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p7').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza7.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p7)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p8').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza8.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p8)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p9').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza9.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p9)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });
    $('.sample_p10').click(function () {
        $('.center_M0').css({ background: 'url(image/center_pizza10.png)' });
        $(this).css({ 'box-shadow': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' });
        $('.section1_sample ul li:not(.sample_p10)').css({ 'box-shadow': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px' });
    });

    // 포장 바뀌는 것

    $('.pd>div:nth-child(2)').hide();
    $('.pd>div:last-child').hide();

    $('.deli_off').click(function () {
        $('.pd>div:nth-child(2)').show();
        $('.pd>div:first-child').hide();
        $('.pd>div:nth-child(3)').hide();
        $('.pd>div:last-child').show();
    });

    $('.pick_off').click(function () {
        $('.pd>div:nth-child(2)').hide();
        $('.pd>div:first-child').show();
        $('.pd>div:nth-child(3)').show();
        $('.pd>div:last-child').hide();
    });

    // 주문하기

    $('.order').click(function () {
        alert('지금은 주문할 수 없습니다!');
    });

    // 토끼 귀 숨기기

    $('.rabbit_box').hover(
        function () {
            $(this).find('.rabbit').css('transform', 'translateY(55px)');
        },
        function () {
            $(this).find('.rabbit').css('transform', 'translateY(0px)');
        }
    );

    // 스크롤 등장 및 인사

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1606 && $(this).scrollTop() < 2310) {
            $('.rtext1').show('fast');
        } else {
            $('.rtext1').hide('fast');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 2330 && $(this).scrollTop() < 2530) {
            $('.rtext2').show('fast');
        } else {
            $('.rtext2').hide('fast');
        }
    });

    // ______ 하단 슬리이드 ______

    // 자동으로 슬라이드 함수생성

    function bannerAuto() {
        $('.ban ul')
            .stop()
            .animate({ marginLeft: '-=370px' }, 1000, function () {
                $('.ban ul li:first-child').appendTo('.ban ul');
                $(this).css({ marginLeft: '0px' });
            });
    }
    bauto = setInterval(bannerAuto, 2300);

    // 다음보기

    $('.ban_btn .ban_right').click(function () {
        clearInterval(bauto);

        $('.ban ul')
            .stop()
            .animate({ marginLeft: '-=370px' }, 500, function () {
                $('.ban ul li:first-child').appendTo('.ban ul');
                $(this).css({ marginLeft: '0px' });
            });
        bauto = setInterval(bannerAuto, 1000);
    });

    // 이전보기

    $('.ban_btn .ban_left').click(function () {
        clearInterval(bauto);

        $('.ban ul')
            .stop(true, true)
            .animate({ marginLeft: '+=370px' }, 500, function () {
                $('.ban ul li:last-child').prependTo('.ban ul');
                $(this).css({ marginLeft: '0px' });
            });
        bauto = setInterval(bannerAuto, 1000);
    });

    // 마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....

    $('.ban').hover(
        function () {
            clearInterval(bauto);
        },
        function () {
            bauto = setInterval(bannerAuto, 2300);
        }
    );

    // 하단 footBottom 고정배너 UpDown________________

    chk2 = true;

    $('.footBottom .shapeDown').click(function () {
        if (chk2) {
            $('.shapeDown').html("<i class='material-icons down'>keyboard_arrow_up</i>");
            $('.footBottom').stop().animate({ bottom: '-236px' }, 500);
            chk2 = false;
        } else {
            $('.shapeDown').html("<i class='material-icons down'>keyboard_arrow_down</i>");
            $('.footBottom').stop().animate({ bottom: '0px' }, 500);
            chk2 = true;
        }
    });
});
