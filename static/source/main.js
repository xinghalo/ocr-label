$(document).ready(function(){

  // 鼠标按下的位置
  var draw_rec = false;

  $('#img').bind("mousedown","div",function(event){
    var target = $(event.target);
    if(target.prop("nodeName")=="SPAN"){
        //禁止冒泡
    }
    if(target.prop("nodeName")=="DIV"){
        // 鼠标按下的位置
        var x_down = event.originalEvent.x || event.originalEvent.layerX || 0;
        var y_down = event.originalEvent.y || event.originalEvent.layerY || 0;

        // img的位置
        var img_top = target.offset().top;
        var img_left = target.offset().left;

        // 创建新的div，宽度高度固定为0
        var rec_x = x_down - img_left;
        var rec_y = y_down - img_top;

        var new_div = "<span style='position:absolute;border-style:solid;border-color:red;"
            + "top:"    + rec_y + "px;"
            + "left:"   + rec_x + "px;"
            + "width:0px;height:0px;'></span>";
        $('#img').append(new_div);
        draw_rec = true;

        console.log("鼠标按下的位置:"+x_down+","+y_down);
    }
  });

  $('#img').mousemove(function(event){
    var x_mouse = event.pageX || 0; // 鼠标x
    var y_mouse = event.pageY || 0; // 鼠标y

    if(draw_rec){
        var _current = $('#img').children().last();
        var rec_top  = _current.offset().top;   // y
        var rec_left = _current.offset().left;  // x

        // 假设y比top大
        _current.css("width",(x_mouse - rec_left)+"px");
        _current.css("height",(y_mouse - rec_top)+"px");
    }
  });

  $('#img').bind("mouseup","div",function(event){
    var target = $(event.target);
    if(target.prop("nodeName")=="DIV" && draw_rec){
        draw_rec = false;
    }
  });

});