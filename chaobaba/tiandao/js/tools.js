// 封装页面卷曲高度
function getScroll(){
    return {
        left : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
}

// 封装页面宽度
function getClient(){
    return{
        width : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}
// 封装动画函数（不透明度-层级）
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 定时器内声明开关，供清除定时器判断
        var flag = true;
        // 遍历json
        for (var k in json) {
            // 获取目标值
            var target = json[k];
            // 单独处理某些属性
            if (k == "opacity") {
                // 不透明度 0-1；放大100倍去渐变
                var leader = getStyle(obj, k) * 100;
                target = target * 100;
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                var leader = target;
                obj.style.zIndex = target;
            } else {
                // 获取每一个样式属性当前位置
                var leader = parseInt(getStyle(obj, k));
                // json[k]每一个样式属性目标位置
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                // 设定每一个样式属性
                obj.style[k] = (leader + step) + "px";
            }
            // 如果有一个还没有到达目标位置，那就继续走，开关设置为false
            if (leader != target) {
                flag = false;
            }
        }
        // 如果开关为true，清除定时器
        if (flag) {
            clearInterval(obj.timer);
            fn && fn();
        }
        console.log("go");
    }, 16)
}

// getStyle
function getStyle(obj, str) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[str];
    } else {
        return obj.currentStyle[str];
    }
}