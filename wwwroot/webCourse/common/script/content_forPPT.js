var sCapability;
function fnOnLoad(){
document.body.onmousewheel=fnMouseWheel;
document.body.scroll="no";
//document.body.style.zoom="100%";
}


function fnMouseWheel(){
try{
	event.returnValue=false;
	if(event.shiftKey||sCapability=="IsHorizontal"){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	var iScrollTop=document.body.scrollTop;
	var iScrollLeft=document.body.scrollLeft;
	iScrollLeft+=iCount;
	window.scroll(iScrollLeft,iScrollTop);
	}
	
	else if(event.ctrlKey||sCapability=="IsZoom"){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
	}
	
	else if(event.altKey||sCapability=="IsVertical"){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	var iScrollTop=document.body.scrollTop;
	var iScrollLeft=document.body.scrollLeft;
	iScrollTop+=iCount;
	window.scroll(iScrollLeft,iScrollTop);
	}
	
	else{
	if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("vertical.gif")>0){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	var iScrollTop=document.body.scrollTop;
	var iScrollLeft=document.body.scrollLeft;
	iScrollTop+=iCount;
	window.scroll(iScrollLeft,iScrollTop);
	}
	if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("horizontal.gif")>0){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	var iScrollTop=document.body.scrollTop;
	var iScrollLeft=document.body.scrollLeft;
	iScrollLeft+=iCount;
	window.scroll(iScrollLeft,iScrollTop);
	}
	if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("zoom.gif")>0){
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
	}
	}
}
catch(e){
	alert("请按住Ctrl,或Shift,或Alt键的同时滚动鼠标试验放缩,移动的功能!");
	document.body.focus();
 }


}




function fnToggleScrollBar(){
if(document.body.scroll=="no"){
	document.body.scroll="yes";
	document.body.onmousemove="";
	document.body.onmousedown="";
	document.body.onmouseup="";
}
else{
	document.body.scroll="no";
	document.body.onmousemove=window.fnPane;
	document.body.onmousedown=window.fnMouseDown;
	document.body.onmouseup=window.fnMouseUp;
}
}