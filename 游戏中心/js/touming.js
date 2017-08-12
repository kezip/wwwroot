
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
one.onmousemove= function () {
    var json={
        "zIndex":2,
        //"top":352,
        "opacity":1
    }
    var json1={
        "zIndex":2,
        "top":895
    }
    animate(two,json1);
    animate(three,json);

}



//封装缓动动画animate函数
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        //假设这一次所有的属性都已经到达了目的位置。
        var flag = true;

        //在计时器里面，要把所有的属性都取出来，然后让他们都到达目的位置
        for(var key in json){
            if(key == "opacity"){
                //获取传入的这个属性的当前的值。 要把px给去掉
                var current = getStyle(obj,key) * 100;

                //如果你的目标位置比当前位置要大，步长就要向上取整，
                //如果你的目标位置比当前位置要小，步长就要想下取值。
                var step = (json[key]*100 - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);

                current += step;

                //给传入的这个属性  重新赋值
                obj.style[key] = current/100;

                //如果这个属性的值不等于目的位置，所以此次假设失败。
                if(current != json[key]){
                    flag = false;
                }
            }else if(key == "zIndex"){
                //获取传入的这个属性的当前的值。 要把px给去掉
                var current = getStyle(obj,key);

                //如果你的目标位置比当前位置要大，步长就要向上取整，
                //如果你的目标位置比当前位置要小，步长就要想下取值。
                var step = (json[key] - current)>0?1:-1;

                current += step;

                //给传入的这个属性  重新赋值
                obj.style[key] = current;

                //如果这个属性的值不等于目的位置，所以此次假设失败。
                if(current != json[key]){
                    flag = false;
                }
            }else{
                //获取传入的这个属性的当前的值。 要把px给去掉
                var current = parseInt(getStyle(obj,key));

                //如果你的目标位置比当前位置要大，步长就要向上取整，
                //如果你的目标位置比当前位置要小，步长就要想下取值。
                var step = (json[key] - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);

                current += step;

                //给传入的这个属性  重新赋值
                obj.style[key] = current +"px";

                //如果这个属性的值不等于目的位置，所以此次假设失败。
                if(current != json[key]){
                    flag = false;
                }
            }
        }

        //所有的属性都到达了目的位置，才可以清空计时器。
        if(flag == true){
            clearInterval(obj.timerId);
            //此时动画停下来了，停下来了继续做事情
            if(typeof fn == "function"){
                fn();
            }
        }


        console.log(step+":"+current);
    },10);
}


//获取元素的样式的值-兼容函数
function getStyle(obj,attr){
    //能力检测-检测执行当前这个代码的浏览器支持不支持这个东西
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}