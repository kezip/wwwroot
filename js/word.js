window.onload=function show() {
    var rank = document.getElementById("rank");
    var rank2 = document.getElementById("rank2");
    var gameList = document.getElementById("gameList");
    var bt1 = document.getElementById("bt1");
    var ul1 = document.getElementById("list1");
    var ul2 = document.getElementById("list2");
    var ul3 = document.getElementById("list3");
    var lis1 = ul1.children;
    var lis2 = ul2.children;
    var lis3 = ul3.children;
    //游戏排行鼠标事件
    rank.onmouseover=function () {
        gameList.style.display="block";
        bt1.style.color="#ff4e00";
        rank2.style.color="#ff4e00";
    }
    rank.onmouseout=function(){
    	gameList.style.display="none";
        bt1.style.color="black";
        rank2.style.color="black";
    }
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