function animate(obj, target) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var currentLeft = obj.offsetHeight;
        var step = (target - currentLeft) / 10;
        currentLeft += step;
        if (Math.abs(target - currentLeft) < Math.abs(step)) {
            clearInterval(obj.timerId);
            obj.style.left = target + "px";
        } else {
            obj.style.left = currentLeft + "px";
        }
    }, 30);
}
window.onload = function () {
    var colors = ["rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "rgba(255,255,255,.1)"];
    //1.���Ҫ�����Ķ���
    var ul = document.getElementsByTagName("ul")[0]; //�õ�����ul��ǩ����������ݡ�
    var ulLis = ul.children;
    var ol = document.getElementsByTagName("ol")[0];
    var olLis = ol.children;
    var timeId = null;
    var leader = 0;
    var target = 0;
    var ol1 = document.getElementById("ol1");
    var ol1Lis = ol1.children;

    //2. ��ÿһ��������ɫ



    colors.forEach(function (item, index) {
        olLis[index].style.backgroundColor = item;
        olLis[0].style.backgroundColor = "#2fc3a3";
        //3. ��ÿһ��li��ǩע���¼�





        olLis[index].onclick = function () {

            for (var i = 0; i < olLis.length; i++) {
                olLis[i].style.backgroundColor = item;
                olLis[i].style.Color = "#000";
            }
            this.style.backgroundColor = "#2fc3a3";
            this.style.color = "#000";
            clearInterval(timeId);
            target = ulLis[index].offsetTop;
            // ȥ�� ��Ӧ�� ul ���� �� this.index  li  ��offsetTop
            timeId = setInterval(function () {
                leader = leader + (target - leader) / 20;
                window.scrollTo(0, leader);
                console.log(leader);
                console.log(target);

            }, 15)
        }

        //for(var i = 0 ; i < ol1Lis.length; i++){
        // ol1Lis[i].setAttribute("index",i);
        clearInterval(timeId);

        ol1Lis[index].onclick = function () {


            for (var j = 0; j < ol1Lis.length; j++) {
                ol1Lis[j].removeAttribute("class");

            }
            this.setAttribute("class", "current");
            clearInterval(timeId);
            target = ulLis[index].offsetTop;


            // ȥ�� ��Ӧ�� ul ���� �� this.index  li  ��offsetTop
            timeId = setInterval(function () {
                leader = leader + (target - leader) / 20;
                window.scrollTo(0, leader);
                console.log(leader);
                console.log(target);

            }, 15)

        }


    });

    var one11 = document.getElementById("one11");
    var tt2 = document.getElementById("tt2");
    var th3 = document.getElementById("th3");
    one11.onmousemove = function () {
        var json = {
            "zIndex": 2,
            //"top":352,
            "opacity": 1
        }
        var json1 = {
            "zIndex": 3,
            "top": 695
        }
        animate1(tt2, json1);
        animate1(th3, json);

    }




    //window.onscroll = function () {
    //    //ÿ����Ļ����������Ļ��ȥ��ͷ����ֵ��leader,ģ���ȡ��ʾ������붥���ľ���
    //    leader = scroll().top;
    //}

}









function getStyle(obj, attr) {
    // �������  ��ν��������⣬Ҳ���ǿ�������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if (obj && obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

function animate1(obj, json, fn) {
    // Ϊ�˱�֤��ǰ�����˶���ʱ��ֻ�Ὺ��һ����ʱ������Ҫ����ʱ�����ڵ�ǰ�����������
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var flag = true;
        for (var key in json) {
            if (key == "opacity") {
                var leader = parseInt(getStyle(obj, key) * 100) || 0; //��Ϊopacity��С����Ϊ�˱��ڼ��㣬�Ƚ���ֵ����100��
                var target = json[key] * 100; //�������json�����Ŀ��λ��
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader / 100;
            } else if (key == "zIndex") {
                var leader = parseInt(getStyle(obj, key)) || 0; //��ǰ�������ڵ�����ֵ
                var target = json[key]; //�������json�����Ŀ��λ��
                step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            } else {
                var leader = parseInt(getStyle(obj, key)) || 0; //��ǰ�������ڵ�����ֵ
                var target = json[key]; //�������json�����Ŀ��λ��
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader + 'px';
            }
            if (leader != target) { //�����һ�����Ե�ֵû�е���Ŀ��λ�õĻ�,��Ҫ��flagΪfalse
                flag = false;
            }
        }
        if (flag) { // Ҫ����flag��ֵ��ȷ���Ƿ�Ҫ�����ʱ��
            clearInterval(obj.timerId);
            if (fn) { //���fn��ֵ��������һ�������Ļ���������������
                fn();
            }
        }
    }, 15)
}