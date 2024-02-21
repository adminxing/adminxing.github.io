/*
 * 版权所有(C) 新锐互动商业网络有限公司 2000-2005
 * Copyright 2000-2005 GEONG BUSINESS NETWORKS LTD.
 * 创建日期 2004-11-25
 */

// 根据当前location.href得到指定信息列表到指定页码的href。
// @param 对应tag.id属性值
// @param pageNumber 页码。1=首页
// @param extended 传递此参数代表当前location.href中非_tp_的参数也返回
// @return 例如'?_tp_item=3&_tp_f=f'
function getTemplatePaginationUrl(id, pageNumber, extended) {
	var search = window.location.search; // '?a=b&c=d'
	if(search == '' || search == '?')
		return '?_tp_' + id + '=' + pageNumber;
	
	var result = '?_tp_' + id + '=' + pageNumber,
		all = typeof(extended) != 'undefined',
		arr = search.substr(1).split('&');
	for(var i = 0; i < arr.length; i++) {
		if(!all && arr[i].indexOf('_tp_') == 0 && arr[i].indexOf('_tp_' + id) == -1 ||
			all && arr[i].indexOf('_tp_' + id) == -1)
			result += '&' + arr[i];
	}
	return result;
}

var features="scrollbars=no  width=460 height=400  left = 100 top = 100 location=no status=no resizable=no toolbar=no menubar=no";

function page(id, pageNumber,param) {
   window.location.href = getTemplatePaginationUrl(id, pageNumber,param);
}
 
 function openHotkeyUrl(id){
 window.location="/HotkeyForwardServlet?hotkeyId="+id;
 }
//for d2s 
function page_static (href,id, pageNumber) {
window.location.href = href+getTemplatePaginationUrl(id, pageNumber);
} 
 
//网上调查js function start
function setCheckBoxText(currentOb,frm){
    frm.all(currentOb.name + "_" + currentOb.value +"_txt").disabled = !currentOb.checked;
}
	
function setRadioText(currentOb,frm){
    try{
        if( (currentOb.hasText!=null) && (currentOb.hasText=='1') ){
 	   		frm.all(currentOb.name+ "_" + currentOb.value+"_txt").disabled = false;
  		}else{
     		frm.all(currentOb.name+ "_" + currentOb.value+"_txt").disabled = true;
  		}
  	} catch(e) {}
}

/*
 *表单中单选加补充文本类型当没有单选选中且补充文本为空时将补充文本前的隐藏域设置为disabled,使得不提交该隐藏域
 */
function setTextDisabled(frm){
	//遍历表单中的对象
	for(i=0;i<frm.all.length;i++){
		var ob = frm.all(i);
		//如果是文本类型对象且值为空时将当前问题的隐藏域设置为disabled
		if( (ob.type!=null) && (ob.type == 'text') && (ob.value == '') ){
			//通过文本对象名称得到当前问题中的最大单选索引号(包括隐藏域)
			var maxRadioIndex = ob.name.split('_')[1];
			//文本域的当前问题中是否有单选按钮按下(不包括隐藏域)
			var preRadioChecked = false;
			//文本域的当前问题中的单选按钮名称
			var radioName = ob.name.split('_')[0];
			//文本域的当前问题中的单选按钮对象
			var preRadio = frm.all(radioName);
			if(preRadio != null && preRadio[0].type == 'radio'){
				//文本域所在问题中判断是否有单选按钮按下,有则将preRadioChecked值设为true
				for(j=0;j<maxRadioIndex;j++){
					if(preRadio[j].checked){
						preRadioChecked = true;
					}
				}
				//如果当前问题中没有单选问题选中,则将文本域前的隐藏域设为disabled
				if(!preRadioChecked){
					preRadio[maxRadioIndex].disabled = true;
				}
			}
		}
	}
}
	
/*
 *校验表单是否有效
 */
function checkValue(frm){	
	var valide = false;
	var haveRadio = false;
	//遍历表单元素
	for(i=0;i<frm.all.length;i++){
	    var ob = frm.all(i);
	    //如果元素为radio或checkbox
		if( (ob.type!=null) && (ob.type=='radio'||ob.type=='checkbox') ){
	        haveRadio = true;      	
	        if(ob.checked){//有radio选中的时候有效
	        	obNext = frm.all(i+1);
	        	//如果单选或多选按钮选中,且其后的元素为文本域,值为空,则将valide设置为'false'
	        	if(obNext.type == 'text' && obNext.value == ''){
	        		valide = 'false';//设为'false'而不是false是为了在后面弹出不同的报错信息.
	        	}else{
	            	valide = true;
	            }
	        }
	    }      
    }
    if( !haveRadio ){//如果没有radio的时候有效
    	 valide = true;
    }
    return valide;
}
	
/*
 *提交网上调查触发
 */
function onSurveySubmit(frm,win) {
    var features="scrollbars=yes  width=460 height=400  left = 100 top = 100 location=no status=no resizable=no toolbar=no menubar=no";
	var MSG = unescape("%u8BF7%u9009%u62E9%u5907%u9009%u9879"); 

	//校验表单是否有效
	var validate = checkValue(frm);
	if(!validate){
		alert(MSG);
		return;
	}
	if(validate == 'false'){
		alert('请在文本框中输入信息');
		return;
	}
	
	//将没有做答的单选加补充文本类型的问题的隐藏域设为disabled,以使得该值不提交
	setTextDisabled(frm);
	
	var sel = null;
	if( typeof(frm.q0) != "undefined" ) {
		if( typeof(frm.q0.length) == "undefined" ) { 
			if(frm.q0.checked)
				sel = frm.rdo_17_2_f.value;
		} else { 
			for(var i=0; i<frm.q0.length; i++) {
				if(frm.q0[i].checked) {
					sel = frm.q0[i].value;
					break;
				}
			}
		}
	}
	if(sel == null) {
	}
	var pop=window.open('',win,features);
	frm.target=pop.name;
	frm.submit();
	pop.focus();
	return;
}

/*
 *弹出查看调查结果窗口
 */
function viewSurveyResult(url,win){
	var features1="scrollbars=yes  width=460 height=400  left = 100 top = 100 location=no status=no resizable=no toolbar=no  menubar=no";
    var pop=window.open(url,win,features1);
    pop.focus();
}

//name当前input的名称，是否为input的sqc属性
function setradiodisabled(name,isSqc){
	if(isSqc == "false"){
		for(var i=0;i <document.all.length;i++){
		   if(document.all[i].sqc != undefined && document.all[i].sqc == name){
		       document.all[i].checked=false;
		   }
		}
		for(var j=0;j<document.all.length;j++){
				if(document.all[j].sqctxt != undefined && document.all[j].sqctxt == name){
					document.all[j].disabled=false;
				}
		}
	}else{
		var nameentity = document.getElementById(name);
		if(nameentity != null){
			nameentity.checked = false;
			for(var j=0;j<document.all.length;j++){
				if(document.all[j].sqctxt != undefined && document.all[j].sqctxt == name){
					document.all[j].disabled=true;
				}
			}
		}
	}
}
//网上调查js function end
