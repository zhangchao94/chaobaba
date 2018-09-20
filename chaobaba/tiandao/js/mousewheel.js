
// 封装鼠标滚轮监听
function MouseWheel(obj,fn){
    var ff = window.navigator.userAgent.indexOf("Firefox");
    // 判断火狐和非火狐
    if ( ff == -1) {
        _addEventListener(obj, "mousewheel", wheel)
    } else {
        _addEventListener(obj, "DOMMouseScroll", wheel)
    }
    // 滚轮滚动时的事件驱动程序
    function wheel(e) {
        e = e || window.event;
        // 声明页面向下
        var down = true;
        // 判断往哪个方向滑动
        if (e.wheelDelta) {
            down = e.wheelDelta > 0;
        } else {
            down = e.detail < 0;
        }
        
        fn && fn.apply(obj,[e,down]);
    }
}


// 封装添加事件监听
function _addEventListener(obj, type, callback) {
    if (window.addEventListener) {
        obj.addEventListener(type, callback)
    } else {
        obj == window ? document : obj;
        obj.attachEvent("on" + type, callback)
    }
}