var $timerBtn = (function(){
    var n =6,
    cfg={
      container:'.main',
      title:'确定',
      time:9,
      enable:false
    };
    /*模板串形式
    var DOM = '<input type="button" class="timer-button" value="同意" disabled>';
    $container.html(DOM);*/
    
    /*DOM操作的方法
    var $timerBtn = $('<input type="button" value="同意（6s）" disabled>');
    $timerBtn.appendTo($container);
    $container.appendTo($timerBtn);*/
    /*var init;
    var $btn, 
      i = 9,
      html = '<input class="timer-button" type="button" value="同意">',
      timer;*/

   var init = function(conf) {
     $.extend(cfg,conf);
     var $container = $(cfg.container);
     var DOM = '<input class="timer-button" type="button" value="' + cfg.title + '(' + n 's)" disabled>';
     container
    i = config.timer;
    $(config.container).html(html);
    $btn = $('input[type="button"]');
    $btn.val(config.text + ' (' + i + ' s)');
    $btn.attr('disabled', 'disabled');

    timer = window.setInterval(function() {
      $btn.val(config.text + ' (' + i-- + ' s)');
      if(i === -1) {
        window.clearInterval(timer);
        $btn.val(config.text);
        $btn.removeAttr('disabled');                  
        }                       
      }, 1000);
                          
      $btnAgree.click(function() {
        $btnAgree.trigger('timer-button-click');
      });
    
      return $btn;                         
    };

   
  return {'init': init};
}());

//构造函数
/*function TimerBtn(conf){
  this.init = function(){

  }
}*/
