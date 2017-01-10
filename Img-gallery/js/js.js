var req = new XMLHttpRequest();
req.open("GET", "./JSON/img.json");
req.onreadystatechange = function(){
	if( this.readyState ==4 ){
		// console.log(this.response);
		var data = JSON.parse(this.response);
		for( var i = 0; i < data.length; i++){

			var div = document.createElement('div');
			div.setAttribute('class', 'image');
			// console.log(div);

			// 이미지 클릭 -> 이미지 선택기능 
			div.onclick = function(){
				this.classList.toggle("image-selected");
			}

			// 이미지에 마우스오버시 1초 뒤 이미지 확대
			div.onmouseenter = function(){
				console.log("1"+this);
				var element = this;
				window.timerId = setTimeout( function(){
					console.log("2"+this);
					element.classList.add("image-magnified");
				}, 1000);
			}

			//이미지에서 마우스가 나가면 이미지를 원래 크기로 되돌림
			div.onmouseout = function(){
				console.log("hello");
				clearTimeout(window.timerId);
				this.classList.remove("image-magnified");
			}

			var img = document.createElement("img");
			img.src = data[i];
			div.appendChild(img);
			document.body.appendChild(div);
		}

	}
}
req.send();

function selectAll(btn){
	var images = document.querySelectorAll(".image");
	for( var i = 0; i < images.length ; i++){
		if(btn.value == "selectAll"){
			images[i].classList.add("image-selected");
		} else {
			images[i].classList.remove("image-selected");
		}
	}
	if( btn.value == "UnselectAll"){
		btn.value = "selectAll";
	}else{
		btn.value = "UnselectAll";
	}
}

function slideShow(btn){
	var images = document.querySelectorAll('.image');
	var index = 0;
	images[index].classList.add("image-magnified");
	
	var intervarId = setInterval( function(){
		images[index].classList.remove("image-magnified");
		index++;
		if( index <images.length ){
			images[index].classList.add("image-magnified");
		} else{
			clearInterval(intervarId);
		}
	}, 1000)
}