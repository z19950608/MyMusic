
(function () {
    //播放按钮显示效果
    //用on添加事件不然动态添加没有效果
    //sessionStorage.setItem('uname','zuowang');
    //sessionStorage.setItem('uid',1);
    $("section").on("mouseenter","dl>div",function(){
        var $this = $(this);
        $this.append('<b></b>').css("position", "relative");
        $this.find("b").animate({
            opacity: 1
        }, 200).attr("class", "changBig");
        $this.find('img').attr("class", "changBig");

    }).on("mouseleave","dl>div",function(){
        var $this = $(this);
        $this.find("b").animate({
            opacity: 0
        }, 200).attr("class", "changSmall");
        $this.find('img').attr("class", "changSmall")
    });




    $(".phb-list li").append('<b></b>').css("position", "relative").css("overflow", "hidden");
    $(".phb-list li").hover(
        function () {
            var $this = $(this);
            $this.find("b").animate({
                opacity: 1
            }, 200).attr("class", "changBig");
            $this.find('div').attr("class", "changBig")

        },
        function () {
            var $this = $(this);
            $this.find("b").animate({
                opacity: 0
            }, 200).attr("class", "changSmall");
            $this.find('div').attr("class", "changSmall")

        }
    );
    //           排行榜
    $(".phb-list li").css("position", "relative");
    $(".phb-list li>div").each(function (index, val) {
        console.log(index, val);
        console.log(val);
        $(val).css("backgroundPositionX", `${-index * 300}px`);
    });

    //新歌首发左右切换功能
    var $newSingUl = $("#sec-top .top-list ul.nav");
    var newSingWidth = 1200;
    var offsetVal = -1;

    var $as = $("#sec-top .list-index li");
    $as.click(function () {
        var $this = $(this);
        var i = $this.index();
        offsetVal = -(i + 1);
        console.log(offsetVal);
        moveSingUl(offsetVal);
    });
    function moveSingUl(index) {
        $newSingUl.animate({
            left: newSingWidth * index
        }, 1000)
        var $indexs = $("#sec-top .list-index").find(`li:eq(${(-(offsetVal) - 1)})`);
        $indexs.addClass('active').siblings().removeClass('active');
    }
    var btn_left1=$("#sec-top .middle-sec .btn-left");
    var btn_right1=$("#sec-top .middle-sec .btn-right");
    btn_left1.click(()=>{
        offsetVal++;
        if (offsetVal > -1) {
            $newSingUl.css('left', '-6000px');
            offsetVal = -4;
            console.log(offsetVal, $newSingUl.css('left'));
        }
        moveSingUl(offsetVal);
    });
    btn_right1.click(()=>{
        offsetVal--;
        if (offsetVal < -4) {
            $newSingUl.css('left', 0);
            offsetVal = -1;
            console.log(offsetVal, $newSingUl.css('left'));
        }
        moveSingUl(offsetVal);
    });
    $("#sec-top .middle-sec").on("mouseenter",
        function () {
            btn_left1.show();
            btn_right1.show();
        }).on("mouseleave", function () {
            btn_left1.hide();
            btn_right1.hide();
        });



//        执门歌单左右切换功能
    var $hotSingUl = $("#bottom-middle .top-list ul.nav");
    var offsetHot = -1;
    var $lis = $("#bottom-middle .list-index li");
    $lis.click(function () {
        var $this = $(this);
        var i = $this.index();
        offsetHot = -(i + 1);
        console.log(offsetHot);
        moveHotSingUl(offsetHot);
    });
    function moveHotSingUl(index) {
        $hotSingUl.animate({
            left: newSingWidth * index
        }, 1000)
        var $indexs = $("#bottom-middle .list-index").find(`li:eq(${(-(offsetHot) - 1)})`);
        $indexs.addClass('dark-active').siblings().removeClass('dark-active');
    }
    var btn_left2=$("#bottom-middle .middle-sec .btn-left");
    var btn_right2=$("#bottom-middle .middle-sec .btn-right");
    btn_left2 .click(()=>
    {
        offsetHot++;
        if (offsetHot > -1) {
            $hotSingUl.css('left', '-4800px');
            offsetHot = -3;
        }
        moveHotSingUl(offsetHot);
    });
    btn_right2.click(()=>
    {
        offsetHot--;
        if (offsetHot < -3) {
            $hotSingUl.css('left', 0);
            offsetHot = -1;
        }
        moveHotSingUl(offsetHot);
    });

    $("#bottom-middle .middle-sec").on("mouseenter",
        function () {
            btn_left2.show();
            btn_right2.show();
        }).on("mouseleave", function () {
            btn_left2.hide();
            btn_right2.hide();
        });



    //登录功能 用户账号登录




//        轮播图
    var $liImgul = $("#sec-middle .pic>.nav");
    var $liImgs = $liImgul.children();
    var cArr = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
    var img_index = 0;
    var imgLength = $liImgs.length - 1;
    var $list_indexLi = $("#sec-middle .list-index");
    console.log(img_index);
    //上一张
    function previmg() {
        cArr.unshift(cArr[8]);
        //向数组的开头添加一个或更多元素 并返回新的长度
        cArr.pop();
        //移除最后一个元素
        //i是元素的索引，从0开始
        //e为当前处理的元素
        //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
        $liImgs.each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        img_index--;
        if (img_index < 0) {
            img_index = imgLength;
        }
        $list_indexLi.children(`li:eq(${img_index})`).addClass('dark-active').siblings().removeClass('dark-active')
    }

    //下一张
    function nextimg() {
        cArr.push(cArr[0]); //向数组的末尾添加一个或更多元素 并返回新的长度
        cArr.shift(); //删除元素数组中的第一个值 并返回
        $liImgs.each(function (i, e) {
            $(e).removeClass().addClass(cArr[i]);
        })
        $list_indexLi.children(`li:eq(${img_index})`).addClass('dark-active').siblings().removeClass('dark-active')
        img_index++;

        if (img_index > imgLength) {
            img_index = 0;
        }
        $list_indexLi.children(`li:eq(${img_index})`).addClass('dark-active').siblings().removeClass('dark-active')
    }
    var btn_left3= $("#sec-middle .middle-sec .btn-left");
    var btn_right3= $("#sec-middle .middle-sec .btn-right");
    btn_left3.click(
        function () {
            previmg();

        });
    btn_right3.click(
        function () {
            nextimg();
        });
    var timer = null;

    function lbt() {
        timer = setInterval(function () {
            previmg();
        }, 2000);
    }

    lbt();
    $("#sec-middle .sec-center").on("mouseenter",
        function () {
            console.log(timer);
            clearInterval(timer);
            timer = null;
            console.log(timer);
            btn_left3.show();
            btn_right3.show();
        }).on("mouseleave", function () {
            console.log(2);
            lbt();
            btn_left3.hide();
            btn_right3.hide();
        })


})();