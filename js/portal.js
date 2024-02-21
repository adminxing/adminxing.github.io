//选项卡切换函数
function showDiv(obj,num,len,objtitle)
{
 for(var id = 1;id<=len;id++)
 {
  var ss=obj+id;
  if(id==num){
  try{document.getElementById(ss).style.display="block"}catch(e){};
  }else{
  try{document.getElementById(ss).style.display="none"}catch(e){};
  }
  if(objtitle != null){
	if((num == 1) && (id == 1)){
		objtitle.className = "tab_left_visited";
	}else if((num == len) && (id == len)){
		objtitle.className = "tab_r_visited";
	}else if(id == num){
		objtitle.className = "tab_m_visited";
	}else if(id == 1){
		objtitle.className = "tab_left_link";
	}else if(id == len){
		objtitle.className = "tab_r_link";
	}else{
		objtitle.className = "tab_m_link";
	}
  }
 }
}

//改变字号大小函数
function ChangeSize(size)
{	    
    document.getElementById('bt').style.fontSize=size+'px'; 
	document.getElementById('zw').style.fontSize=size+'px'; 		
}