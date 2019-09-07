// JavaScript Document
/**
 * 获取鼠标在页面上的位置
 * @param ev		触发的事件
 * @return			x:鼠标在页面上的横向位置, y:鼠标在页面上的纵向位置
 */
function getMousePoint(ev) {
	// 定义鼠标在视窗中的位置
	//alert(1);
	var point = {
		x:0,
		y:0
	};
 
	// 如果浏览器支持 pageYOffset, 通过 pageXOffset 和 pageYOffset 获取页面和视窗之间的距离
	if(typeof window.pageYOffset != 'undefined') {
		point.x = window.pageXOffset;
		point.y = window.pageYOffset;
	}
	// 如果浏览器支持 compatMode, 并且指定了 DOCTYPE, 通过 documentElement 获取滚动距离作为页面和视窗间的距离
	// IE 中, 当页面指定 DOCTYPE, compatMode 的值是 CSS1Compat, 否则 compatMode 的值是 BackCompat
	else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
		point.x = document.documentElement.scrollLeft;
		point.y = document.documentElement.scrollTop;
	}
	// 如果浏览器支持 document.body, 可以通过 document.body 来获取滚动高度
	else if(typeof document.body != 'undefined') {
		point.x = document.body.scrollLeft;
		point.y = document.body.scrollTop;
	}
 
	// 加上鼠标在视窗中的位置
	point.x += ev.clientX;
	point.y += ev.clientY;
 
	// 返回鼠标在视窗中的位置
	return point;
}