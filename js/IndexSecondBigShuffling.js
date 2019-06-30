var imageso = document.querySelectorAll('#secondlunbo .secbigPic img');
var spanso = document.querySelectorAll('.follow1 span');
var leftButo = document.getElementById('leftButo');
var rightButo = document.getElementById('rightButo');
// 定义有参函数
function showImageo(index) {
for (var i = 0; i < imageso.length; i++) {
spanso[i].index = i;//自定义属性，得到对应的下标
imageso[i].index = i;//自定义属性，得到对应的下标
imageso[i].style.zIndex = 100 - i;//为图片排列顺序
imageso[i].style.opacity = '0';//将图片透明度全部赋值为0
spanso[i].style.background = 'gray';//圆点北京色全部设置为黑色
}
//将传入参数下标值的图片透明度赋值为 1
imageso[index].style.opacity = '1';
//将传入参数下标值的图片的背景色赋值为white
spanso[index].style.background = 'white';
}
showImageo(0);//初始设置下标为0的图片和圆点的样式


var counto = 1;//获取计数器
// 定义自动轮播函数
function imageMoveo() {
// 判断count的值如果能被4整除，则将count重新赋值为0；
if (counto % 3 == 0) {
counto = 0;
}
// 将count值当做参数传给函数showImage();
showImageo(counto);
counto++;//执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var imageInitailMoveo = setInterval('imageMoveo()', 3000);
// 向左点击事件
leftButo.onclick = function() {
// 先清除定时器
clearInterval(imageInitailMoveo);
// 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
if (counto == 0) {
counto = 3;
}
counto--;
showImageo(counto);//调用函数count先自－
imageInitailMoveo = setInterval('imageMoveo()', 3000);
}
// 向右的点击事件
rightButo.onclick = function() {
clearInterval(imageInitailMoveo);
imageMoveo();//由于和自动轮播的方向相同所以直接调用
// 重新为定时器赋值
imageInitailMoveo = setInterval('imageMoveo()', 3000);
}