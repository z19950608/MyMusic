
$("footer").load('footer.html');
    //    footer 图标的hover效果,要页尾全部加载完才能实现此效果
(function () {
    $("header").on("dblclick","[href=#myModal]",function(){
        $(this).prop("disabled",false);
        $(this).html('请登录').css("color","green");
        sessionStorage.clear('uid');
        sessionStorage.clear('uname');
        location.reload()
    });
    //登陆功能
    window.onload=function(){
        console.log(sessionStorage.getItem("uname"));
        if(sessionStorage.getItem("uname")!="undefined"&&sessionStorage.getItem("uname")){
            $("[href=#myModal]").html(`你好：${sessionStorage.getItem("uname")}`).css("color","green").prop("disabled",true);
        }
        $("header").on('click','.modal-body .btn-success',function(){
            var uname=$("#uname").val();
            var upwd=$("#upwd").val();
            console.log(uname,upwd);
            $.ajax({
                url:"data/music_login.php",
                type:"get",
                data:{uname:uname,upwd:upwd},
                success:function(data){
                    console.log(data);
                    var index=data.indexOf('{');
                    if(index===-1){
                    	alert('用户名或密码错误');
                    }else{
                        var data=data.slice(index);
                        console.log(data);
                        console.log(index);
                        data=eval("("+data+")");//解决问题
                        console.log(data);
                        sessionStorage.setItem('uid',data.uid);
                        setTimeout(function(){$("#myModal").hide();
                            $(".modal-backdrop").remove();
                            $('body').removeClass();
                        },1000);
                        window.sessionStorage.setItem("uname",data.uname);
                        $("[href=#myModal]").html(`你好：${data.uname}`).css("color","green").prop("disabled",true);
                        location.reload()
                    }
                },
                error:function(){
                   console.log(arguments)
                }
            })
        });
        $("footer").on("mouseenter",".footer-sec .nav dl",function(){
            var $this = $(this);
            $this.find("i").css("backgroundPositionY", "47px");
        }).on("mouseleave",".footer-sec .nav dl", function () {
                var $this = $(this);
                $this.find("i").css("backgroundPositionY", "0px");
            }
        );




        //qq登录与微信登录切换
        $("header").on("click",".qqLogin",function () {
            $("#myModal .modal-body").html(`
                 <form action="">
                    <div style="width:50%;margin:0px auto" class="text-center">
                    <h2>帐号密码登录</h2>
                    <p style="margin:10px auto">推荐使用 <a href="#">快速安全登录</a>,防止盗号</p>
                    <div class="form-group">
                        <input class="form-control" type="text" id="uname" placeholder="用户名"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" id="upwd" placeholder="密码"/>
                    </div>
                    <button type="button" class="btn btn-block btn-success">登录</button>
                </form>
            </div>`)
        });
        $("header").on("click",".modal-footer ul.clearfix a:eq(1)",function () {
               location.href="register.html";
        });



        //  qq二维码登录
        $("header").on("click",".qq_erweimaLogin",function () {
            $("#myModal .modal-body").html(`
                    <h1>快速安全登录</h1>
                    <p>请使用 <a href="#">QQ手机版</a>扫描二维码,</p>
                    <p>或点击头像授权登录</p>
                    <ul class="nav">
                    <li><img src="img/erweima.png" alt=""/></li>
                    </ul>
            </div>`)
            $(this).parent().addClass("active").siblings().removeClass("active")
        });




        //微信二维码登录
        $("header").on("click",".weixinLogin",(function () {
            $("#myModal .modal-body").html(`
                       <h1>快速安全登录</h1>
                    <p>请使用微信扫描二维码登录</p>
                    <p>QQ与微信帐号的音乐资产、付费特权不互通</p>
                    <ul class="nav">
                        <li><img src="img/erweima.png" alt=""/></li>
                    </ul>

            </div>`);
            $(this).parent().addClass("active").siblings().removeClass("active")

        }));
        $("header").on("click","li[data-toggle=tab]",function () {

            console.log($(this).index());
            if($(this).index()===1){
               location.href="usercenter.html"
            }else if($(this).index()===0){
                location.href="index.html";
                console.log($("header").find(".top-sec .nav li:eq(1) a"));
            }
        });



        //点击li跳转链接
        $("header").on('click','.top-sec .nav li',function(){
            console.log(12);
            console.log($("header").find(".top-sec .nav li:eq(1) a"));
            if($(this).index()===0){
                location.href="index.html";
                $("header").find(".top-sec .nav li:eq(0) a").css("color","#31C27C")
            }else  if($(this).index()===1){
                location.href="singer.html"
            }else  if($(this).index()===2){
                location.href="special.html"
            }
        })

    }})();