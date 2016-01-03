$(document).ready(function(){

    $("#slider").slider({
        min: 0,
        max: 100000,
        values: [0,100000],
        range: true,
        stop: function(event, ui) {
            $("#minCost").val($("#slider").slider("values",0));
            $("#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    });

    $("#minCost").keydown(function(){
        var value1=$("#minCost").val();
        var value2=$("#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });


    $("#maxCost").keydown(function(){
        var value1=$("#minCost").val();
        var value2=$("#maxCost").val();

        if (value2 > 100000) { value2 = 100000; $("#maxCost").val(100000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });



});