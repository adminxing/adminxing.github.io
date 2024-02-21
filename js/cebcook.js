//打开窗口
	//打开窗口

function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  var cookstr;
  if (endstr == -1)
  endstr = document.cookie.length;
   
  cookstr	=	unescape(document.cookie.substring(offset, endstr));

  if(cookstr!=null)
	  cookstr	=decodeURI(cookstr);
 return cookstr;
}
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0)
       break;
  }
  return null;
}
function SetCookie(cookieName,cookieValue,nDays) {
 var today = new Date();
 var expire = new Date();
 if (nDays==null || nDays==0) nDays=1;
 expire.setTime(today.getTime() + 3600000*24*nDays);
 document.cookie = cookieName+"="+escape(cookieValue) + ";path=/;expires="+expire.toGMTString();
}

function SetCookieWithDomain(domain,cookieName,cookieValue,nDays) {
 var today = new Date();
 var expire = new Date();
 if (nDays==null || nDays==0) nDays=1;
 expire.setTime(today.getTime() + 3600000*24*nDays);
 document.cookie = cookieName+"="+escape(cookieValue) + ";path=/;domain=" + domain + ";expires="+expire.toGMTString();
}
function deleteCookie (name){
    var date=new Date();
    var ms= 1 * 1000;
    date.setTime(date.getTime() - ms);
    var str = name+"=no; expires=" + date.toGMTString(); //将过期时间设置为过去来删除一个cookie
    document.cookie=str;
}
