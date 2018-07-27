$(document).ready(function(){
  // 鼠标按下的位置
  var x_down = -1;
  var y_down = -1;
  var draw_rec = false;

  $('#img').bind("mousedown","div",function(event){
    var target = $(event.target);
    if(target.prop("nodeName")=="SPAN"){
        //禁止冒泡
    }
    if(target.prop("nodeName")=="DIV"){
        // 记录鼠标按下的位置
        x_down = event.originalEvent.x || event.originalEvent.layerX || 0;
        y_down = event.originalEvent.y || event.originalEvent.layerY || 0;

        draw_rec = true;
        console.log("鼠标按下的位置:"+x_down+","+y_down);
    }
  });

  $('#img').bind("mouseup","div",function(event){
    var target = $(event.target);
    if(target.prop("nodeName")=="DIV" && draw_rec){
        // 获得鼠标抬起的坐标信息
        var xx = event.originalEvent.x || event.originalEvent.layerX || 0;
        var yy = event.originalEvent.y || event.originalEvent.layerY || 0;

        // 获得对象的坐标信息
        var img_top = target.offset().top;
        var img_left = target.offset().left;

        console.log("鼠标抬起的位置:"+xx+","+yy);
        console.log("图片的位置:"+img_left+","+img_top)

        // 创建新的div
        var rec_x = x_down - img_left;
        var rec_y = y_down - img_top;
        var rec_w = xx - x_down;
        var rec_h = yy - y_down;

        var new_div = "<span style='position:absolute;border-style:solid;border-color:red;"
            + "top:"    + rec_y + "px;"
            + "left:"   + rec_x + "px;"
            + "width:"  + rec_w + "px;"
            + "height:" + rec_h + "px;"
            + "'></span>";

        $('#img').append(new_div);

        x_down = -1;
        y_down = -1;
    }
  });

});