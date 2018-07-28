{
    let width = $("#picChangeDiv").css("width");

    setCSS();

    function setCSS(){
        $(".pic").css("width",parseFloat($("#picChangeDiv").css("width"))+2+"px");
        $(".pic").css("height","360px");
    }

    $(".kind1").click(function(){
        $(".kind1").css({"color":"black","font-weight":"bold"});
        $(".kind2").css({"color":"lightgray","font-weight":"normal"});
        $(".new1").css("display","block");
        $(".new2").css("display","none");
    });
    $(".kind2").click(function(){
        $(".kind2").css({"color":"black","font-weight":"bold"});
        $(".kind1").css({"color":"lightgray","font-weight":"normal"});        
        $(".new1").css("display","none");
        $(".new2").css("display","block");
    });
    $(".kind1").click();
}