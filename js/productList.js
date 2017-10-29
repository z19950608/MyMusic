//新歌首发的内容
var page=1;
$("#pages").on("click",'li a',function(e){
    e.preventDefault();
    var $this=$(this);
    var index=$this.parent().index();
    console.log(index);
    page=index;
    console.log(page);
    toPage(page,16);
});
toPage(page,16);
//热门歌单的内容
function toPage(page,num){
    $.ajax({
        url:"data/productlist.php",
        data:{page:page,pagenum:num},
        success:(data)=>{
            console.log(data);
            var str="";
            for(var i=data.length-4;i<data.length;i++){
                var val=data[i];
                str+=`
                 <li>
                    <dl>
                        <div class="pic-a">
                            <a href="play_music.html"><img class="img-responsive" src=${val.pig} alt=""/></a>
                        </div>
                        <dt>
                            <a href="">${val.pname}<span>…</span></a>
                        </dt>
                        <dd>
                            ${val.maker}
                        </dd>

                    </dl>
                </li>
            `
            }
            for(var val of data){

                str+=`
                 <li>
                    <dl>
                        <div class="pic-a">
                            <a href="play_music.html"><img class="img-responsive" src=${val.pig} alt=""/></a>
                        </div>
                        <dt>
                            <a href="">${val.pname}<span>…</span></a>
                        </dt>
                        <dd>
                            ${val.maker}
                        </dd>

                    </dl>
                </li>
            `
            }

            for(var i=0;i<4;i++){
                var val=data[i];
                str+=`
                 <li>
                    <dl>
                        <div class="pic-a">
                            <a href="play_music.html"><img class="img-responsive" src=${val.pig} alt=""/></a>
                        </div>
                        <dt>
                            <a href="">${val.pname}<span>…</span></a>
                        </dt>
                        <dd>
                            ${val.maker}
                        </dd>

                    </dl>
                </li>
            `
            }
            $("#productList").html(str);
        },
        error:()=>{console.log(page)}
    });
}
gdPage(2,12);
function randomNum(){
    return Math.floor(Math.random()*100).toFixed(2)
}
function gdPage(page,num){
    $.ajax({
        url:"data/productlist.php",
        data:{page:page,pagenum:num},
        success:(data)=>{
            console.log(data);
            var str="";
            for(var i=data.length-4;i<data.length;i++){
                var val=data[i];
                str+=`
                 <li>
                        <dl>
                            <div class="pic-a">
                                <a href=""><img class="img-responsive" src=${val.pig} alt=""/></a></div>
                            <dt>
                                <a href="">${val.pname}<span>…</span></a>
                            </dt>
                            <dd>
                                播放量:
                                <output>${randomNum()}万</output>
                            </dd>
                        </dl>
                    </li>
            `
            }
            for(var val of data){

                str+=`
                 <li>
                        <dl>
                            <div class="pic-a">
                                <a href=""><img class="img-responsive" src=${val.pig} alt=""/></a></div>
                            <dt>
                                <a href="">${val.pname}<span>…</span></a>
                            </dt>
                            <dd>
                                播放量:
                                <output>${randomNum()}万</output>
                            </dd>
                        </dl>
                    </li>
            `
            }

            for(var i=0;i<4;i++){
                var val=data[i];
                str+=`
                 <li>
                        <dl>
                            <div class="pic-a">
                                <a href=""><img class="img-responsive" src=${val.pig} alt=""/></a></div>
                            <dt>
                                <a href="">${val.pname}<span>…</span></a>
                            </dt>
                            <dd>
                                播放量:
                                <output>${randomNum()}万</output>
                            </dd>
                        </dl>
                    </li>
            `
            }
            $("#hot-gd").html(str);
        },
        error:()=>{console.log(page)}
    });
}



//MV的内容
