window.onload = function () {
    /* 需求：1.第一行浮动自然排列即可，
            2.第二行开始，每一个都放在上一行高度最低的位置，需要定位，top&left
            3.遍历每一个图片，获悉哪些是第一行哪些不是 
            4.触底加载，模拟后端返回数据进行加载
    */
    // 
    var section = document.getElementById("box"),
        boxes = section.children;

    // 3.遍历每一张图片，储存第一行所有元素的高度，然后找出最小值以及最小值的索引
    function waterfall() {
        // 第一行的个数 = 页面的宽度/单个盒子的宽度
        var winWdith = getClient().width,
            imgWidth = boxes[0].offsetWidth,
            column = Math.floor(winWdith / imgWidth);
        // 声明数组，储存高度
        var arrHeight = [];
        for (var i = 0; i < boxes.length; i++) {
            if (i < column) {
                // 第一行的
                arrHeight.push(boxes[i].offsetHeight);
            } else {
                // 非第一行的,通过最小值和索引对应的元素，来定位其他元素
                var minH = getMin(arrHeight).minHeight,
                    minI = getMin(arrHeight).minIndex;
                // 设置元素
                boxes[i].style.position = "absolute";
                boxes[i].style.top = minH + "px";
                boxes[i].style.left = boxes[minI].offsetLeft + "px";
                // 更新高度数组
                arrHeight[minI] += boxes[i].offsetHeight;
            }
        }
    }
    waterfall();

    // 4.触底加载
    var res = [
        { src: "./img/P_001.jpg" },
        { src: "./img/P_002.jpg" },
        { src: "./img/P_003.jpg" },
        { src: "./img/P_004.jpg" },
        { src: "./img/P_005.jpg" },
        { src: "./img/P_006.jpg" },
        { src: "./img/P_007.jpg" },
        { src: "./img/P_008.jpg" },
        { src: "./img/P_009.jpg" }
    ];

    // 监听窗体滚动
    window.onscroll = function () {
        // 如果触底了，加载 
        if (sole()) {
            // console.log("触底了")
            for (var i = 0; i < res.length; i++) {
                var img = document.createElement("img"),
                    div = document.createElement("div");
                img.src = res[i].src;
                div.appendChild(img);
                section.appendChild(div);
            }
            waterfall();
        }
    }

    // 封装判断触底
    function sole() {
        // 最后一个元素的offsetTop < 页面可视区域高度 + 页面卷曲高度
        var temp = getClient().height + getScroll().top;
        if (boxes[boxes.length - 1].offsetTop < temp) {
            return true;
        } else {
            return false;
        }
    }


    // 获取最小高度以及索引
    function getMin(arr) {
        var obj = {
            minIndex: 0,
            minHeight: arr[0]
        }
        for (var i = 0; i < arr.length; i++) {
            if (obj.minHeight > arr[i]) {
                obj.minHeight = arr[i];
                obj.minIndex = i;
            }
        }
        return obj;
    }


}