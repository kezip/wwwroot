//blade-top开始
$(function(){
    $('#blade-d #blade-d-bottom > .left > li:last-child > a').mouseenter(function(){
        $(this).siblings('div').slideDown();
    })
    $('#blade-d #blade-d-bottom > .left > li:last-child > a').mouseleave(function(){
        $(this).siblings('div').slideUp();
    })
})
//blade-top结束
// ad开始
$(function(){
    //默认页面时 鼠标移入事件
    $('#c-bottom>li').mouseover(function(){
        $('#c-bottom>li').removeClass('active');
        $(this).addClass('active');
        $('#c-img>li').children().hide().eq($(this).index()).show();
    })
    //默认页面时 鼠标移出事件
    $('#c-bottom').mouseout('li',function(){
        $(this).removeClass('active');
    })
    //按钮点击的通用效果
    $('#c-top>li').click(function(){
        $('#c-top>li').removeClass('active');
        $(this).addClass('active');
    })
    //给官方按钮添加点击事件
    $('#c-top>li:first').click(function(){
        $('#c-bottom-t').hide();
        $('#c-bottom').show();
        $('#c-bottom>li').mouseover(function(){
            $('#c-bottom>li').removeClass('active');
            $(this).addClass('active');
            $('#c-img').children().hide().eq($(this).index()).show();
        })
        $('#c-bottom').mouseout('li',function(){
            $(this).removeClass('active');
         })
    })
    //给合作按钮添加点击事件
    $('#c-top>li:last').click(function(){
        $('#c-bottom').hide();
        $('#c-bottom-t').show();
        $('#c-bottom-t>li').mouseover(function(){
            $('#c-bottom-t>li').removeClass('active');
            $(this).addClass('active');
            $('#c-img').children().hide().eq($(this).index() + $('#c-bottom').children().length).show();
        })
        $('#c-bottom-t').mouseout('li',function(){
            $(this).removeClass('active');
         })
    })

    



    // $('#c-top>li').mouseover(function(){
    //     $(this).css('color','#fff');
    // })
    // $('#c-top>li').mouseout(function(){
    //     $(this).css('color','#979696');
    // })
    $('#ad-right>a>img').mouseover(function (){
        $('#ad-right>a>img').css('opacity','1');
    })
    $('#ad-right>a>img').mouseout(function (){
        $('#ad-right>a>img').css('opacity','0.6');
    })
})

// ad结束
