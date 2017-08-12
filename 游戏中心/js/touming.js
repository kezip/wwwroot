
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



//��װ��������animate����
function animate(obj,json,fn){
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        //������һ�����е����Զ��Ѿ�������Ŀ��λ�á�
        var flag = true;

        //�ڼ�ʱ�����棬Ҫ�����е����Զ�ȡ������Ȼ�������Ƕ�����Ŀ��λ��
        for(var key in json){
            if(key == "opacity"){
                //��ȡ�����������Եĵ�ǰ��ֵ�� Ҫ��px��ȥ��
                var current = getStyle(obj,key) * 100;

                //������Ŀ��λ�ñȵ�ǰλ��Ҫ�󣬲�����Ҫ����ȡ����
                //������Ŀ��λ�ñȵ�ǰλ��ҪС��������Ҫ����ȡֵ��
                var step = (json[key]*100 - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);

                current += step;

                //��������������  ���¸�ֵ
                obj.style[key] = current/100;

                //���������Ե�ֵ������Ŀ��λ�ã����Դ˴μ���ʧ�ܡ�
                if(current != json[key]){
                    flag = false;
                }
            }else if(key == "zIndex"){
                //��ȡ�����������Եĵ�ǰ��ֵ�� Ҫ��px��ȥ��
                var current = getStyle(obj,key);

                //������Ŀ��λ�ñȵ�ǰλ��Ҫ�󣬲�����Ҫ����ȡ����
                //������Ŀ��λ�ñȵ�ǰλ��ҪС��������Ҫ����ȡֵ��
                var step = (json[key] - current)>0?1:-1;

                current += step;

                //��������������  ���¸�ֵ
                obj.style[key] = current;

                //���������Ե�ֵ������Ŀ��λ�ã����Դ˴μ���ʧ�ܡ�
                if(current != json[key]){
                    flag = false;
                }
            }else{
                //��ȡ�����������Եĵ�ǰ��ֵ�� Ҫ��px��ȥ��
                var current = parseInt(getStyle(obj,key));

                //������Ŀ��λ�ñȵ�ǰλ��Ҫ�󣬲�����Ҫ����ȡ����
                //������Ŀ��λ�ñȵ�ǰλ��ҪС��������Ҫ����ȡֵ��
                var step = (json[key] - current)/10;
                step = step > 0? Math.ceil(step):Math.floor(step);

                current += step;

                //��������������  ���¸�ֵ
                obj.style[key] = current +"px";

                //���������Ե�ֵ������Ŀ��λ�ã����Դ˴μ���ʧ�ܡ�
                if(current != json[key]){
                    flag = false;
                }
            }
        }

        //���е����Զ�������Ŀ��λ�ã��ſ�����ռ�ʱ����
        if(flag == true){
            clearInterval(obj.timerId);
            //��ʱ����ͣ�����ˣ�ͣ�����˼���������
            if(typeof fn == "function"){
                fn();
            }
        }


        console.log(step+":"+current);
    },10);
}


//��ȡԪ�ص���ʽ��ֵ-���ݺ���
function getStyle(obj,attr){
    //�������-���ִ�е�ǰ�������������֧�ֲ�֧���������
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}