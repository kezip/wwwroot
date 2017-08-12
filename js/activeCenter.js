window.onload=function show() {
    var activeBox = document.getElementById("activeBox");
    var divs = activeBox.children[0].children;
    var newDiv = document.createElement("div");
    var flag = true;
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
    //鼠标移入显示遮罩层    
    function flagFun(){
    	flag = true;
    }
    for (var i = 0; i < divs.length; i++) {
        divs[i].onmouseover = function () {
            if(flag){
            	flag=false;
	            var content = this.children[0].children[2].innerHTML
	            newDiv.innerHTML = "<a href='#' style='font-size: 17px;color: white;text-decoration: underline'>点击参加活动</a>" +
	                "<br><a href='#' style='font-size: 14px;color: white'>" + content + "</a>";
	            newDiv.setAttribute("class", "ghostGreen");
	            this.children[0].appendChild(newDiv);
	            animatSpecial(newDiv, {
	                "bottom": -10
	            },flagFun);
            }
        }
        newDiv.onmouseout = function () {
        	if(flag){
            	flag=false;
	            animatSpecial(newDiv, {
                "bottom": -275
            	},flagFun);
            }
            
        }
    }
    //动画函数
    function animatSpecial(eve,json,fn) {
	    clearInterval(eve.f5);
	    eve.f5=setInterval(function () {
	        var flag=true;
	        for(var key in json){
	                var current=parseInt(styleCheck(eve,key));
	                var setup=(json[key]-current)/2;
	                setup=setup> 0? Math.ceil(setup):Math.floor(setup);
	                current+=setup;
	                eve.style[key]=current+"px";
	                if (current!=json[key]){
	                    flag=false;
	                }
	        }
	        if (flag){
	            clearInterval(eve.f5);
	            if (typeof fn=="function"){
	                fn();
	            }
	        }
	    },30);
	}
    //检测浏览器支持获取元素属性的方式
    function styleCheck(eve,direction) {
	    if(getComputedStyle(eve,null)){
	        return getComputedStyle(eve,null)[direction];
	    }
	    else{
	        return eve.currentStyle[direction];
	    }
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
