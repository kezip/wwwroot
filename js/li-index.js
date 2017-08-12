/**
 * Created by liwei on 2017/7/16.
 */
window.onload = function(){
    var lisTwo = document.getElementById("lisTwo");
    var mv  = document.getElementById("mv");
    var bw  = document.getElementById("bw");
    var video  = document.getElementById("video");
    var liBgc  = document.getElementById("li-bgc");
    var liBgc2  = document.getElementById("li-bgc2");
	var ul1 = document.getElementById("list1");
    var ul2 = document.getElementById("list2");
    var ul3 = document.getElementById("list3");
    var lis1 = ul1.children;
    var lis2 = ul2.children;
    var lis3 = ul3.children;

    lisTwo.onmouseover = function(){
        this.children[0].style.left = 0;
        this.children[0].style.top = 0;

        this.children[0].src = "image/1-1.png";
    }
    lisTwo.onmouseout = function(){
        this.children[0].style.left = 220+"px";
        this.children[0].src = "image/1.jpg";
    }

    mv.onmouseover = function(){
        liBgc.style.top= "0px";
        this.style.backgroundPosition = "0 -106px";
    }
    mv.onmouseout = function(){
        liBgc.style.top= "-214px";
        this.style.backgroundPosition = "0 -318px";
    }

    bw.onmouseover = function(){
        liBgc2.style.top= "0px";
        this.style.backgroundPosition = "-180px -106px";
    }
    bw.onmouseout = function(){
        liBgc2.style.top= "-214px";
        this.style.backgroundPosition = "-180px -318px";
    }

    video.onclick = function(){
        play.style.display= "block";
        play.play();
    }
    //鼠标移入显示排行列表
    var listThree=document.getElementById("list-three");
    var iconTerrace=document.getElementById("icon-terrace");
    var top=document.getElementById("top");
    var gameList=document.getElementById("gameList")
    listThree.onmouseover=function(){
    	gameList.style.display="block";
    }
    listThree.onmouseout=function(){
    	gameList.style.display="none";
    }
    //游戏列表鼠标移入事件
    function mouseMove(eve,x){
    	for (var i = 2; i < eve.length; i++) {
        var spans = document.createElement("span");
        i < 5 ? spans.setAttribute("class", "selectSpanOrange") : spans.setAttribute("class", "selectSpanBlack");
        spans.innerHTML = i - 1;
        eve[i].appendChild(spans);
        var span = document.createElement("span");
        var imgs = document.createElement("img");
        eve[i].onmouseover = function () {
            span.className = "newSpan";
            span.innerHTML = "<a href='#' style='display:inline-block;margin-left: 36px;color: #aaaaaa;'>进入官网</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<a href='#' style='display:inline-block;color: #aaaaaa;'>下载游戏</a>";
            imgs.src = "image/"+x+(this.children[0].innerHTML)+".jpg";
            imgs.className = "newImg";
            this.appendChild(imgs);
            this.appendChild(span);
	            for (var j = 2; j < eve.length; j++) {
	                eve[j].removeAttribute("class");
	            }
            this.setAttribute("class", "select");
        	} 
    	}    
   }
    mouseMove(lis1,"l");
    mouseMove(lis2,"c");
    mouseMove(lis3,"r");   
}