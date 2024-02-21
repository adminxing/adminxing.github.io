/*收缩张开侧栏*/

function bar(obj)
{
 if(obj.className == "bar")
 {
  obj.className = "bar2";
  document.getElementById("zhan").style.display="none";
  document.getElementById("shou").style.display="block";
  parent.document.getElementById("side").width="68px";
  parent.document.getElementById("side").height='540px';
  parent.document.getElementById("mainFrame").width="893px";
  
 }
 else{
  obj.className = "bar";
  document.getElementById("zhan").style.display="block";
  parent.document.getElementById("side").width="283px";
  parent.document.getElementById("side").height='540px';
  parent.document.getElementById("mainFrame").width="679px";
  document.getElementById("shou").style.display="none";
}
}

/*下拉菜单隐藏显示*/

function displaySubMenu(li) { 
	var subback = li.getElementsByTagName("a")[0]; 
	var subMenu = li.getElementsByTagName("ul")[0]; 	
	subMenu.style.display = "block";   
	subback.style.backgroundImage="url(images/purple/013_d.gif)"; 
	subback.style.color="#ffffff"; 
	var coll = mainFrame.document.all.tags("select");
	if (coll.length>0) {
		for(var i=0;i<coll.length;i++){coll(i).blur();}
	}
}
function hideSubMenu(li) {
	var subback = li.getElementsByTagName("a")[0];
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "none";
	subback.style.backgroundImage="";
	subback.style.color="";
}
function displaySubMenu2(li) { 		
	var subback2 = li.getElementsByTagName("a")[0]; 
	var subMenu2 = li.getElementsByTagName("ul")[0]; 
	if (window.clientInformation.userAgent.indexOf( "MSIE " ) > 0) 	{ 	
		subMenu2.style.position="relative"; 	
		} 
	subMenu2.style.display = "block"; 
	subback2.style.backgroundImage="url(images/purple/013_c3.gif)"; 
	subback2.style.color="#ffffff";  	}
function hideSubMenu2(li) {
	var subback2 = li.getElementsByTagName("a")[0];
	var subMenu2 = li.getElementsByTagName("ul")[0];
	subMenu2.style.display = "none";
	subback2.style.backgroundImage="";
	subback2.style.color="";
	
}
function displaySubMenu3(li) {
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "block";
	}
	
function hideSubMenu3(li) {
	var subMenu = li.getElementsByTagName("ul")[0];
	subMenu.style.display = "none";
}
/*导航栏菜单*/ 
function onImg(cursel,n){	
       for(i=1;i<=n;i++){
	     if(i==1)
		 {
		  document.getElementById("n_"+1).style.backgroundImage=i==cursel?"url(images/purple/hover_01.gif)":"url(images/purple/nav_1.jpg)";
		 }else{
			 if(i != 10)
				 document.getElementById("n_"+i).style.backgroundImage=i==cursel?"url(images/purple/013_d.gif)":"";
			 else
				 document.getElementById("n_"+i).style.backgroundImage=i==cursel?"":"";
		 }
     }
}  
/*框架页面跳转*/

function goURL(urla)
{
	parent.mainFrame.location.href=urla;
	parent.side.document.getElementById('mainRight').style.display="none";
	parent.side.document.getElementById('transRight').style.display="";
	parent.document.getElementById("side").width="68px";
	parent.document.getElementById("side").height="400px";
	parent.document.getElementById("mainFrame").width="893px";
	parent.side.document.getElementById('bar').className = "bar2";
	parent.side.document.getElementById("zhan").style.display="none";
	parent.side.document.getElementById("shou").style.display="block";
}
function goURL2(urla)
{
	parent.mainFrame.location.href=urla;
	parent.side.document.getElementById('mainRight').style.display='';
	parent.side.document.getElementById('transRight').style.display='none';
	parent.document.getElementById("side").width="283px";
	parent.document.getElementById("mainFrame").width="679px";
	parent.document.getElementById("side").height='540px';
}


/**/
function on_tr()
{
	this.style.backgroundColor='#ffccff';
    this.style.backgroundColor='#FFFFFF';
}
function over_tr()
{
    this.style.backgroundColor='#FFFFFF';
}

/*弹出框*/
var isIe=(document.all)?true:false;
//设置select的可见状态
function setSelectState(state)
{
var objl=document.getElementsByTagName('select');
for(var i=0;i<objl.length;i++)
{
objl[i].style.visibility=state;
}
}
function mousePosition(ev)//获取鼠标的位置，赋给弹出的层位置
{
if(ev.pageX || ev.pageY)
{
return {x:ev.pageX, y:ev.pageY};
}
return {
x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,y:ev.clientY + document.body.scrollTop - document.body.clientTop
};
}
/*弹出方法二*/
function testMessageBox(evt)
{
	var _event = evt ? evt : event; 
	var s=document.documentElement.clientHeight-500;
	if(screen.height==600)
	{
		if(document.documentElement.clientHeight<500)
		{
			document.getElementById('message_box').style.top=document.documentElement.scrollTop-50+"px";
		}else{
		document.getElementById('message_box').style.top=document.documentElement.scrollTop-20+"px";}
	}else{
		document.getElementById('message_box').style.top=document.documentElement.scrollTop+"px";
	}
	document.getElementById('mask_box').style.visibility='visible';
	if(document.documentElement.clientHeight>document.body.scrollHeight){
		document.getElementById('mask').style.height=document.documentElement.clientHeight+"px";
	}else{
		document.getElementById('mask').style.height=document.body.scrollHeight+"px";
	}
	var mesW=document.createElement("span");
	mesW.id="mesWindow";
	document.body.appendChild(mesW);
	document.getElementById('mask_box').height=document.body.scrollHeight;
	document.getElementById('mask').style.visibility='visible';
	document.getElementById('message_box').style.visibility='visible';

}

function closeWindow()
{
	document.getElementById('message_box').style.top=0;
	document.getElementById('mask_box').height=0;
	document.getElementById('mask').style.height=document.documentElement.clientHeight+"px";
	document.getElementById('test').src='load.do';
	document.getElementById('message_box').style.visibility='hidden';
	document.getElementById('mask').style.visibility='hidden';
	document.getElementById('mask_box').style.visibility='hidden';
	document.body.removeChild(document.getElementById('mesWindow'));
	scrollTo(0,document.documentElement.scrollTop);
}

function testMessageBox2(ev)
{

var objPos = mousePosition(ev);
messContent="";
showMessageBox('',messContent,objPos,10);
document.getElementById('message_box').style.visibility='visible';
}
/*选项卡标签*/
function onlab(id){
if(id==1)
{
document.getElementById("bh1").className="tab1_l";
document.getElementById("bh2").className="tab1";
document.getElementById("bh3").className="tab1_r";
document.getElementById("th1").className="tab2_l";
document.getElementById("th2").className="tab2";
document.getElementById("th3").className="tab2_r";
document.getElementById("bh").style.display="block";
document.getElementById("th").style.display="none";
}
if(id==2)
{
document.getElementById("bh1").className="tab2_l";
document.getElementById("bh2").className="tab2";
document.getElementById("bh3").className="tab2_r";
document.getElementById("th1").className="tab1_l";
document.getElementById("th2").className="tab1";
document.getElementById("th3").className="tab1_r";
document.getElementById("bh").style.display="none";
document.getElementById("th").style.display="block";
}
}

function onshow(box,obj,name){
if(document.getElementById(name).innerText=="收起")	
{
	document.getElementById(name).innerText="查询账户余额及明细";
	document.getElementById(box).style.display="none";
	document.getElementById(obj).className="d_back";
}else if(document.getElementById(name).innerText=="查询账户余额及明细")
{
	
	document.getElementById(name).innerText="收起";
	document.getElementById(box).style.display="block";
	document.getElementById(obj).className="d_backk";
}
}
function onshow1(box,obj,name){
if(document.getElementById(name).innerText=="收起")	
{
	document.getElementById(name).innerText="查询明细";
	document.getElementById(box).style.display="none";
	document.getElementById(obj).className="d_back";
}else if(document.getElementById(name).innerText=="查询明细")
{
	
	document.getElementById(name).innerText="收起";
	document.getElementById(box).style.display="block";
	document.getElementById(obj).className="d_backk";
}
}
function onshow3(box,obj,name){
if(document.getElementById(name).innerText=="详细信息")	
{
	document.getElementById(name).innerText="收起";
	document.getElementById(box).style.display="block";
	document.getElementById(obj).className="ycback02";
}else if(document.getElementById(name).innerText=="收起")
{
	
	document.getElementById(name).innerText="详细信息";
	document.getElementById(box).style.display="none";
	document.getElementById(obj).className="ycback01";
}
}
function onshow2(box){
if(document.getElementById(box).style.display=="none")	
{
	document.getElementById(box).style.display="block"
}else if(document.getElementById(box).style.display=="block")
{
	document.getElementById(box).style.display="none"
}
}
// 确定按钮是否置灰
function showSubmit(obj,id) {
	var qyxz=document.getElementById(obj);
		if(qyxz.checked==true){
			document.getElementById(id).style.display='';
		} else {
			document.getElementById(id).style.display='none';
			
		}
	}
//隐藏显示
function onshow4(id,obj){
if(document.getElementById(id).style.display=="block")	
{
	
	document.getElementById(id).style.display="none";
	document.getElementById(obj).style.display="block";
}else if(document.getElementById(id).style.display=="none")
{
	document.getElementById(id).style.display="block";
	document.getElementById(obj).style.display="none";
}
   	
}
function onshow5(id,obj){
	parent.mainFrame.document.getElementById(obj).value=document.getElementById(id).innerText;
}
//文本框点击
function onshow7(id,a)
{
 id.style.color="#000000";
 if(id.value==a)
 id.value="";
}
function onshow6(id)
{
 id.style.color="#000000";
 id.value="";
}


function refresh()
{
}
var level1 = "";
var level2 = "";
var level3 = "";
var level4="";//added by jeff
var flag3 = false;
var flag2 = false;
var flag4=false;//added by  jeff
var i_id = ""

function show_hide(trobjstr,i_id)
{       
	var trobj=eval(trobjstr);
	if(trobj.style.display=="")
	{
		trobj.style.display="none";
		L1.className="back";
		L2.className="back";
		L3.className="back";
	}else{
		trobj.style.display="";
		i_id.className="backk";

	}
	if(level1 == "")
	{
		level1 = trobj;
		i_id.className="backk";

	}
	else if(level1 != trobj)
	{
		level1.style.display = "none";
		L1.className="back";
		L2.className="back";
		L3.className="back";

		if(level2 != "")
			level2.style.display = "none";
		L1.className="back";
		L2.className="back";
		L3.className="back";
		if(level3 != "")
			level3.style.display = "none";
		L1.className="back";
		L2.className="back";
		L3.className="back";
		
		if(level4 != "")//jeff
			level4.style.display = "none";
		L1.className="back";
		L2.className="back";
		L3.className="back";
		
		level1 = trobj;
		i_id.className="backk";

	}
	refresh();
}

//浮层
function tailiframe(url){
	parent.testMessageBox(event);
	parent.document.getElementById("test").src = url;
	scrollTo(0,document.documentElement.scrollTop);
}

function displaySubMenu4(li) { 
	var subback2 = li.getElementsByTagName("a")[0]; 	
	var subMenu2 = li.getElementsByTagName("ul")[0]; 
	if (window.clientInformation.userAgent.indexOf( "MSIE " ) > 0) 	
	{ 		
		subMenu2.style.position="relative"; 
	} 
	subMenu2.style.display = "block"; 
	subback2.style.backgroundImage="url(images/purple/013_c4.gif)"; 
	subback2.style.color="#ffffff"; 
	}

function testMessageBox9(evt)
{
	var _event = evt ? evt : event; 
	document.getElementById('mask_box').style.visibility='visible';
	if(document.documentElement.clientHeight>document.body.scrollHeight){
		document.getElementById('mask').style.height=document.documentElement.clientHeight+"px";
	}else{
		document.getElementById('mask').style.height=document.body.scrollHeight+"px";
	}
	var mesW=document.createElement("span");
	mesW.id="mesWindow";
	document.body.appendChild(mesW);
	document.getElementById('mask_box').height=document.getElementById('mainFrame').height;
	document.getElementById('mask').style.visibility='visible';
	document.getElementById('message_box').style.visibility='visible';

}
