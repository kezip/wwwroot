/**
 * Created by hasee on 2017/7/15.
 */

var Tsbg=document.getElementById("Tsbg")
var lis=Tsbg.children[0].children[1].children[0].children
var lia=Tsbg.children[0].children[1].children[0].getElementsByTagName("a")

var bgc;
for(var i=0;i<lis.length;i++){
    lis[i].setAttribute("index",i)
    lis[i].onmouseover=function(){
        bgc=this.style.backgroundColor
        this.style.backgroundColor="#3ED2B2"
        lia[this.getAttribute("index")].setAttribute("class","current")
    }

    lis[i].onmouseout=function(){
        this.style.backgroundColor=bgc
        lia[this.getAttribute("index")].removeAttribute("class")
    }
}


var Tbbg=document.getElementById("Tbbg")
var list=Tbbg.children[1].children[3].children[0].children
var divs=Tbbg.children[1].children[3].children[0].getElementsByTagName("div")


for(var i=0;i<list.length;i++){
    list[i].setAttribute("index",i)
    list[i].onmouseover=function(){
        divs[this.getAttribute("index")].style.display="block"
    }
    list[i].onmouseout=function(){
        divs[this.getAttribute("index")].style.display="none"
    }
}


var Ttop=document.getElementById("Ttop")
var meinv=document.getElementById("meinv")
var jl=document.getElementById("jl")


meinv.onmouseover=function(){
    jl.style.display="block"
}
meinv.onmouseout=function(){
    jl.style.display="none"
}

var btn=document.getElementById("btn")

var move=document.getElementById("move")

var flag=true
btn.onclick=function(){
    if(flag){
        move.style.display="block"
        move.play()
        this.innerText="退出"
        flag=false
    }else{
        move.style.display="none"
        move.pause()
        this.innerText="播放"
        flag=true
    }

}

var lbt=document.getElementById("lbt")
var ul1=lbt.children[0]
var ul1lis=ul1.children
var box=document.getElementById("box")
var ul2=box.children[0]
var imgwidth=lbt.offsetWidth

for(var i=0;i<ul1lis.length;i++){
    var linew=document.createElement("li")
    linew.setAttribute("index",i)
    ul2.appendChild(linew)
}

var ul2lis=ul2.children
ul2lis[0].setAttribute("class","current")

for(var i=0;i<ul2lis.length;i++){
    ul2lis[i].onclick=function(){
        for(var j=0;j<ul2lis.length;j++){
            ul2lis[j].removeAttribute("class")
        }
        this.setAttribute("class","current")
       var target=-this.getAttribute("index")*imgwidth
        animate(ul1,target)

        picindex=spanindex=this.getAttribute("index")
    }
}

var time
time=setInterval(next,3000)

var picindex=0
var spanindex=0
var newli1=ul1lis[0].cloneNode(true)
ul1.appendChild(newli1)
function next(){
    if(picindex==3){
        picindex=0
        ul1.style.left=0
    }
    picindex++
    var target=-picindex*imgwidth
    animate(ul1,target)

    for(var i=0;i<ul2lis.length;i++){
        ul2lis[i].removeAttribute("class")
    }
    if(spanindex<ul2lis.length-1){
        spanindex++
    }else{
        spanindex=0
    }

    ul2lis[spanindex].setAttribute("class","current")
}



lbt.onmouseover=function(){
    clearInterval(time)
}

lbt.onmouseout=function(){
    time=setInterval(next,3000)
}


function animate(obj,target){
    clearInterval(obj.time)
    obj.time=setInterval(
        function(){
            var index=obj.offsetLeft
            var step=index<target?20:-20
            index+=step
            if(Math.abs(target-index)<Math.abs(step)){
                clearInterval(obj.time)
                obj.style.left=target+"px"
            }else{
                obj.style.left=index+"px"
            }
        },10
    )
}

   	var rank = document.getElementById("rank");
    var rank2 = document.getElementById("rank2");
    var gameList = document.getElementById("gameList");
    var bt1 = document.getElementById("bt1");
    var ul = document.getElementById("list1");
    var ul2 = document.getElementById("list2");
    var ul3 = document.getElementById("list3");
    var lis1 = ul.children;
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
	
