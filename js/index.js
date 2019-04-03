$(function(){

    
    //初始化代码
    $('#itcast').fullpage({
        navigation:true,
        sectionsColor: ['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],
        // 滚出来调用的函数
        afterLoad:function(a,index){

            // $('.section1').addClass('animation');
            // $('.section2').addClass('animation');
            $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
        }
    });

})