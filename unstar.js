var $buttons = $$('.js-toggler-target');
var index = 0;
var timer = window.setInterval(function(){
    if(index >= $buttons.length){
        window.clearInterval(timer);
    }else{
        $buttons[index].click();
        index=index+2;  
    }
}, 1000);
