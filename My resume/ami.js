    //视觉滚动差
    
    var strength1 = 50;
    var strength2 = 200;
    var strength3 = 500;
    //获取高宽
    var ScreenWidth = $(window).width();
    var ScreenHeight = $(window).height();
    
    var Screen = ScreenWidth/ScreenHeight;
    
    var currentScroll;//水平轴
     //水平轴位置
    $(window).scroll(function(){
        currentScroll=$(this).scrollLeft();
        var pageX = currentScroll-($(window).width() / 2);
        var newvalueX = 1 * pageX * 1;
        //移动距离
        $('.bg').css("background-position", (strength1 / $(window).width() * newvalueX * -1)+"px "+"0px");
        $('#RainBow').css("background-repeat","no-repeat");
        $('#RainBow').css("background-position", (strength1 / $(window).width() * newvalueX * -1)+"px "+"0px");
        $('#Grass1').css("background-position",(strength2 / $(window).width() * newvalueX * -1)+"px "+"0px");
        $('#Grass2').css("background-position",(strength2/$(window).width()*newvalueX*-1)+"px "+ "0px");
        $('#Floor2').css("background-position",(strength3/$ (window).width() * newvalueX * -1) +"px "+"0px");
    
        if(Screen > 1.7){
            $('#bg').css("width","506%");
            $('#Floor2').css("width","502%");
            $('#Grass1').css("width","502%");
            $('#Grass2').css("width","502%");
        }
    });
    //5个触发点
    var ActionPoint1 = ScreenWidth/7;
    var ActionPoint2 = ScreenWidth/1.25;
    var ActionPoint3 = ScreenWidth/0.315;
    var ActionPoint4 = ScreenWidth/0.25;
    var ActionPoint5 = ScreenWidth/0.19;

    //jump
    var JumpUp= ScreenHeight/2.50;
    var JumpDown = ScreenHeight / 1.25;
     var previousScroll = 0;
    var timer;
    var PigJump;
    $(window).scroll(function(){
        ScreenWidth = $(window).width();
        ScreenHeight = $(window).height();
        ActionPoint1 = ScreenWidth/7;
        ActionPoint2 = ScreenWidth/1.25;
        ActionPoint3 = ScreenWidth/0.315;
        ActionPoint4 = ScreenWidth/0.25;
        ActionPoint5 = ScreenWidth/0.19;
        JumpUp = ScreenHeight/3.31;
        JumpDown = 0;
        currentScroll = $(this).scrollLeft();
        
        $("#Pig").css('webkitAnimationName', 'PigWalk');
        
        if (currentScroll>previousScroll) {
            $('#Player').css('webkitAnimationName','RWalk');
            clearTimeout(timer);

            timer= setTimeout(idel,250);
        }
        else if(currentScroll<previousScroll){
            $('#Player').css('webkitAnimationName','LWalk');
            clearTimeout(timer);
            timer= setTimeout(idel,250);
        }


        if(currentScroll>ActionPoint1){
            if(PigJump===0){
                $("#Pig").animate({bottom:"250px"});
                $("#Pig").animate({bottom:"0px"});
                PigJump=1;
            }
        }
        else if(currentScroll<ActionPoint1){
            PigJump=0;
        }

        if(currentScroll>ActionPoint2){
            $("#Bat1").animate({top:"47%",left:"143%"},3500);
            $("#Bat2").animate({top:"47%",left:"153%"},4000);
            $("#Bat3").animate({top:"62%",left:"143%"},3500);
            $("#Bat4").animate({top:"62%",left:"153%"},4000);
            $("#Bat5").animate({top:"62%",left:"163%"},5000);
            $("#Bat6").animate({top:"62%",left:"173%"},10000);
            $("#Bat7").animate({top:"78%",left:"143%"},3500);
            $("#Bat8").animate({top:"78%",left:"153%"},4000);
            $("#Bat9").animate({top:"78%",left:"163%"},4500);
            $("#Bat10").animate({top:"78%",left:"173%"},2500);
        }

        if(currentScroll>ActionPoint3){
            if (PigJump==1) {
                $("#Pig").animate({bottom:"250px"});
                $("#Pig").animate({bottom:"0px"});
                PigJump=2;                  
            }
        }
            else if(currentScroll<ActionPoint3&&currentScroll>ActionPoint1){
                PigJump=1;
            }

            if (currentScroll > ActionPoint4 && currentScroll < ActionPoint5)
            {
                $("#Speak").animate({height:"150px"}, 2000);
            }
            
            //递回现在水平轴滚动位置 给 旧水平轴滚动位置
            previousScroll = currentScroll; 
        
    });
    var idel = function(){
        $('#Player').css('webkitAnimationName','');
        $('#Pig').css('webkitAnimationName','');
    }
