$(function () {
    $(".artNav").hover(function () {
        $(this).addClass('newCss')
    }, function () {
        $(this).removeClass('newCss')
    });

    //二维码出现
    $('.twoCode').hover(function () {
        $(this).find('.vron  .twoDimensionalCode').css({
            opacity: 1
        });
        $(this).find('.vron  .twoDimensionalCode img').css({
            marginTop: '14.3%'
        });
        $(this).find('.vron .img').css({
            transform: 'scale(1.2)'
        })
    }, function () {
        $(this).find('.vron  .twoDimensionalCode').css({
            opacity: 0
        });
        $(this).find('.vron  .twoDimensionalCode img').css({
            marginTop: '20%'
        });
        $(this).find('.vron .img').css({
            transform: 'scale(1)'
        })
    })

    //页尾旋转
    $("footer .piece li").eq(0).hover(function () {
        $(this).css({
            transform: 'rotate(360deg)',
            background: '#F56505'
        });
    }, function () {
        $(this).css({
            transform: 'rotate(0deg)',
            background: ''
        });
    });
    $("footer .piece li").eq(1).hover(function () {
        $(this).css({
            transform: 'rotate(360deg)',
            background: '#00CF0D'
        });
    }, function () {
        $(this).css({
            transform: 'rotate(0deg)',
            background: ''
        });
    });
    $("footer .piece li").eq(2).hover(function () {
        $(this).css({
            transform: 'rotate(360deg)',
            background: '#D9534F'
        });
    }, function () {
        $(this).css({
            transform: 'rotate(0deg)',
            background: ''
        });
    });

    $('.artNav ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
    //滚动监听
    $(window).scroll(function () {

        //侧边导航active
        var top = $('article section').eq(0).offset().top;
        var scrollTop = $(window).scrollTop();

        var top = $("#top").offset().top;
        var house = $('#house').offset().top;
        var show = $('#show').offset().top;
        var advantage = $('#advantage').offset().top;
        var partners = $('#partners').offset().top;

        if (scrollTop > partners && scrollTop < ($('#partners').innerHeight() + partners)) {
            $('.artNav li').eq(4).addClass('active').siblings().removeClass('active');
        } else if (scrollTop > advantage && scrollTop < ($('#advantage').innerHeight() + advantage)) {
            $('.artNav li').eq(3).addClass('active').siblings().removeClass('active');
        } else if (scrollTop > show && scrollTop < ($('#show').innerHeight() + show)) {
            $('.artNav li').eq(2).addClass('active').siblings().removeClass('active');
        } else if (scrollTop > house && scrollTop < ($('#house').innerHeight() + house)) {
            $('.artNav li').eq(1).addClass('active').siblings().removeClass('active');
        } else if (scrollTop > top && scrollTop < ($('#top').innerHeight() + house)) {
            $('.artNav li').eq(0).addClass('active').siblings().removeClass('active');
        }

        createItem($('.toRight1'), 500, 1, $('.toLeft1'));
        createItem($('.toRight2'), 500, 2, $('.toLeft2'));
        createItem($('.toRight3'), 500, 1, $('.toLeft3'));

        createTB($('.toTop1'), 1000);
        createTB($('.toBottom1'), 1000);
        createTB($('.toTop2'), 1000);
        createTB($('.toTop3'), 1200);
        createTB($('.toBottom3'), 1000);
        createTB($('.toTop4'), 1000);
        createTB($('.toBottom4'), 1200);
        createTB($('.toTop5'), 1000);
        createTB($('.toTop6'), 1000);
        createTB($('.toBottom6'), 1500);

        createTB($('.toTop7'), 1000);
        createTB($('.toTop9'), 1000);

        createTB($('.toBottom8'), 1000);
        createTB($('.toTop10'), 1000);
        createTB($('.toTop11'), 1000);
        createTB($('.toTop'), 1000);


        // create($('.toBottom'), $('.toTop'), 500);
        //创建带参函数 第一个为对象，第二个为时间，此后为属性
        function createTB(obj, time) {
            var top = obj.offset().top;
            var windowH = $(window).innerHeight();
            var scrollTop = $(window).scrollTop();
            if (((windowH + scrollTop - 0) > top) && ((windowH + scrollTop - 600) < (top + obj.innerHeight()))) {
                obj.animate({
                    marginTop: 0,
                    opacity: 1
                }, time);
            }
        }

        function createItem(obj1, time, num, obj2) {

            var top = obj1.offset().top;
            var windowH = $(window).innerHeight();
            var scrollTop = $(window).scrollTop();
            if (num == 1) {
                if (((windowH + scrollTop - 80) > top) && ((windowH + scrollTop - 480) < (top + obj1.innerHeight()))) {
                    obj1.animate({
                        marginLeft: 0
                    }, time)
                    obj2.animate({
                        marginLeft: 0,
                        opacity: 1
                    }, time + 800)
                }
            } else if (num == 2) {
                if (((windowH + scrollTop - 80) > top) && ((windowH + scrollTop - 480) < (top + obj1.innerHeight()))) {
                    obj1.animate({
                        marginLeft: 0,
                        opacity: 1
                    }, time + 800)
                    obj2.animate({
                        marginLeft: 0
                    }, time)
                }
            } else {
                var top = obj1.offset().top;
                var windowH = $(window).innerHeight();
                var scrollTop = $(window).scrollTop();

                if ((windowH + scrollTop - 80) > top) {
                    obj1.animate({
                        marginTop: 0,
                        opacity: 1
                    }, time)
                }
            }

        }

        //nav滑动设置
        var top = $('nav').offset().top;
        if (top > 290) {
            $('nav').css({background: 'rgba(0,0,0,1)', paddingTop: '10px', paddingBottom: '2px'})
        } else if (top > 180) {
            $('nav').css({background: 'rgba(0,0,0,0.7)', paddingTop: '15px', paddingBottom: '10px'})
        } else if (top > 90) {
            $('nav').css({background: 'rgba(0,0,0,0.3)', paddingTop: '18px', paddingBottom: '18px'})
        } else if (top < 50) {
            $('nav').css({background: 'rgba(0,0,0,0)', paddingTop: '20px', paddingBottom: '20px'})
        }
    })

    //banner
    var item = $(".banner .item");

    var num = $(".banner .num");

    var len = item.length;

    var html_page = "", index = 0;

    for (var i = 0; i < len; i++) {
        if (i === 0) {
            html_page += "<li class='on'> </li>";
        } else {
            html_page += "<li> </li>"
        }
    }
    num.html(html_page);

    //显示索引对应的图片
    function showPic(index) {
        item.eq(index).addClass('active').siblings().removeClass('active');
        num.find("li").eq(index).addClass("on").siblings().removeClass("on");
    }

    //点击事件
    $(".num li").click(function () {
        index = $(this).index();
        showPic(index);
    });

    $(".banner").hover(function () {
        clearInterval(window.timer)
    }, function () {
        window.timer = setInterval(function () {
            showPic(index);
            index++;
            if (index === len) {
                index = 0;
            }
        }, 3000)
    }).trigger("mouseleave")

})