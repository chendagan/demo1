window.onload=function(){

/*第一部分*/	
            var introduction = "/*<br>*大家好，我是陈雅婷<br/>*我现在是个大四的学生<br/>*现在让我展示自己的简历吧！<br>*我不太喜欢白色，请先让我把背景改一下颜色<br>*/<br>/*将颜色改成黑色*/<br>coreshow_bg{color：#FFF}<br>"
            var me = document.getElementById('introduction');
            var i=0;
            var timer=setInterval(function(){
                me.innerHTML=introduction.substring(0,i);
                i++;
                if(me.innerHTML==introduction.innerHTML){
                    clearInterval(timer);
                }
            },70);/*这是1、introduction的内容*/
		
		
				
/*第二部分*/				
function core_bg(){ 
  $('#core').css("color","#FFF");
  $("#core_bg").fadeIn("slow")
            var editvitae = "<br>/*准备一个编辑器*/<br>.resumeEditor<br>{<br>background:#FFF;<br>float:right;<br>}"
            var vitae = document.getElementById('vitae');
            var i=0;
            var timer=setInterval(function(){
                vitae.innerHTML=editvitae.substring(0,i);
                i++;
                if(vitae.innerHTML==editvitae.innerHTML){
                    clearInterval(timer);
                }
            },70);/* 2、准备一个编辑器，这是vitae的内容*/
/*第三部分*/		
		
function coreshow(){ 
  $('li').hide();		
  $("#coreshow").fadeIn("slow") 	
   var start = "<br>/*那么现在我开始介绍我自己*/<br>"
            var myself = document.getElementById('myself');
            var i=0;
            var timer=setInterval(function(){
                myself.innerHTML=start.substring(0,i);
                i++;
                if(myself.innerHTML==start.innerHTML){
                    clearInterval(timer);
                }
            },70);
function coreshowzi(){

			var xinxi = "<br>姓名：陈雅婷<br>学校：天津工业大学<br>专业：软件工程<br>专业技能："
            var xinxi1 = document.getElementById('xinxi');
            var i=0;
            var timer=setInterval(function(){
                xinxi1.innerHTML=xinxi.substring(0,i);
                i++;
                if(xinxi1.innerHTML==xinxi.innerHTML){
                    clearInterval(timer);
                }
            },70);	
function showjineng(){
				$('#jineng li').each(function(index){
                $(this).delay(800*index).fadeIn(1000,function(){});
                });
					
function xm(){
	$('#xm').fadeIn('slow')
	 var ys = "/*看起来是不是很乱？让我设置一下它们的样式吧*/<br>.resume_title{<br>font-title:”黑体“;<br>color:#30F;<br>font-size:24px;<br>}	"
            var ys1 = document.getElementById('yangshi');
            var i=0;
            var timer=setInterval(function(){
                ys1.innerHTML=ys.substring(0,i);
                i++;
                if(ys1.innerHTML==ys.innerHTML){
                    clearInterval(timer);
                }
            },70);	
			
function bt(){
	$('#xinxi').css("font-family","黑体");
	$('#xinxi').css("color","#30F");
	$('#xinxi').css("font-size","20px");
    $('#xinxi').css("line-height","24px");
	$('#xm p').css("font-family","黑体");
	$('#xm p').css("color","#30F");
	$('#xm p').css("font-size","20px");
    $('#xm p').css("line-height","24px");

	var ys1 = "<br>.resume_ohtercss{<br>……<br>…………<br>}	"
            var ys11 = document.getElementById('yangshi1');
            var i=0;
            var timer=setInterval(function(){
                ys11.innerHTML=ys1.substring(0,i);
                i++;
                if(ys11.innerHTML==ys1.innerHTML){
                    clearInterval(timer);
                }
            },70);	
function zuihou(){
$('fz').css("color","#FF0000");
$('li').css('color','#090');
$('#tl').css('border','#006633')
$('#tl').css({"border":"1px solid purple"});
$('#bwl').css({"border":"1px solid blue"});
}
time7=ys1.length*70;
setTimeout(zuihou,time7)	
}			
time6=ys.length*70;
setTimeout(bt,time6);					
}
time5=3000;
setTimeout(xm,time5);
}
time4=xinxi.length*70
setTimeout(showjineng,time4);				
}
time3=start.length*70;
setTimeout(coreshowzi,time3);			
}
time2=editvitae.length*70;
NO2=setTimeout(coreshow,time2)		
} 
time1=introduction.length*70;
NO1=setTimeout(core_bg,time1) 	
}
		
	