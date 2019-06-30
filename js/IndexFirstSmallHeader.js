var oPicBtno = document.getElementsByClassName('picBtno');
var oBigPico = document.getElementsByClassName('bigPico');
var oBefore = document.getElementById('before');
var oNext = document.getElementById('next');
		console.log(oPicBtno);
		slider()
		
		function slider(){
			
				inter ();
				
				var iNowo = 0;
				var timero;
				
				for (var i = 0;i<oPicBtno.length;i++){
					console.log(i)
					bind(i)
				}
				
				function bind(index){
					oPicBtno[index].onclick = function(){
						clearInterval(timer);
						iNowo = index;
						console.log('dianji'+index)
					changePic(index)
					inter()
				}
			}
			
			function changePic(index){
				for(var j = 0;j<oBigPico.length;j++){
				oBigPico[j].style.opacity = 0;
				if(j==index){
					oBigPico[index].style.opacity = 1;
				}
			}
		}
			
			//定时器
			function inter (){
		//						var iNow = 0;
				timer = setInterval(function(){
					iNowo++;
					console.log('zidong'+iNowo)
					if(iNowo>=3){
						iNowo=0
					}
					changePic(iNowo)
				},3000)
			}
			
			//向前
			oBefore.onclick = function(){
				clearInterval(timero);
				iNowo--;
				if(iNowo<0){
					iNowo = oBigPico.length-1;
				}
				console.log('前'+iNowo);
				changePic(iNowo);
				inter();
			}
			
			//向后
			oNext.onclick = function(){
				clearInterval(timero);
				iNowo++;
				if(iNowo>oBigPico.length-1){
					iNowo = 0;
				}
				console.log('后'+iNowo)
					changePic(iNowo);
					inter();
				}
		}