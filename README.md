# 批量取消star

### 使用方法
* 使用google chrome 浏览器  
* 打开你自己的github star页 例如 我的：https://github.com/audiebantzhan?page=1&tab=stars
* 打开chrome 开发工具 console 输入下面代码运行 然会刷新网页 再运行 
```javascript
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
```


[参考了csdk这位的仁兄的代码，但是并不起效果](https://blog.csdn.net/baidu_16051437/article/details/60348763)
