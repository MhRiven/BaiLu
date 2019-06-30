var smallimageso = document.querySelectorAll('#lunbo2-1pic img');
var smallspanso = document.querySelectorAll('.follow2 span');
var smallleftButo = document.getElementById('smallleftButo');
var smallrightButo = document.getElementById('smallrightButo');
// 定义有参函数
function smallshowImageo(index) {
for (var i = 0; i < smallimageso.length; i++) {
smallspanso[i].index = i;//自定义属性，得到对应的下标
smallimageso[i].index = i;//自定义属性，得到对应的下标
smallimageso[i].style.zIndex = 100 - i;//为图片排列顺序
smallimageso[i].style.opacity = '0';//将图片透明度全部赋值为0
smallspanso[i].style.background = 'gray';//圆点北京色全部设置为黑色
}
//将传入参数下标值的图片透明度赋值为 1
smallimageso[index].style.opacity = '1';
//将传入参数下标值的图片的背景色赋值为white
smallspanso[index].style.background = 'white';
}
smallshowImageo(0);//初始设置下标为0的图片和圆点的样式


var smallcounto = 1;//获取计数器
// 定义自动轮播函数
function smallimageMoveo() {
// 判断count的值如果能被4整除，则将count重新赋值为0；
if (smallcounto % 3 == 0) {
smallcounto = 0;
}
// 将count值当做参数传给函数showImage();
smallshowImageo(smallcounto);
smallcounto++;//执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var smallimageInitailMoveo = setInterval('smallimageMoveo()', 3000);
// 向左点击事件
smallleftButo.onclick = function() {
// 先清除定时器
clearInterval(smallimageInitailMoveo);
// 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
if (smallcounto == 0) {
smallcounto = 3;
}
smallcounto--;
smallshowImageo(smallcounto);//调用函数count先自－
smallimageInitailMoveo = setInterval('smallimageMoveo()', 3000);
}
// 向右的点击事件
smallrightButo.onclick = function() {
clearInterval(smallimageInitailMoveo);
smallimageMoveo();//由于和自动轮播的方向相同所以直接调用
// 重新为定时器赋值
smallimageInitailMoveo = setInterval('smallimageMoveo()', 3000);
}
// 圆点的点击事件
for (var i = 0; i < smallspanso.length; i++) {
smallspanso[i].onclick = function() {
clearInterval(smallimageInitailMoveo);
// 将当前点击的圆点的下标值赋值给count
smallcounto = event.target.index;
// 调用函数
smallshowImageo(smallcounto);
smallimageInitailMoveo = setInterval('smallimageMoveo()', 3000);
}
}