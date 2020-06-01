var nameTown = document.querySelector(".name-town");
var findTemperature = document.querySelector(".find-temperature");
var containerResult = document.querySelector(".container-result");

/*
var dataKeyTown = []

var urlKeyTwon = "http://dataservice.accuweather.com/locations/v1/topcities/100?apikey=ZdGHWKNcESVf1TDNDLHNYTgyaIJ2dUGZ&language=ru&details=true HTTP/1.1"

 findTemperature.addEventListener("click", function(){
*/
/*	var promise = fetch(urlTwo)
	.then(res => res.json())
	.then(json => console.log(json))
	console.log(promise)*/

/*
var xhr = new XMLHttpRequest()
	xhr.open("GET", urlKeyTwon)

	xhr.responseType = "json" // преобразуем строку в json формат
	
		xhr.onload = function(){ // загружаем запрос
			if(xhr.status >= 400){//если больше 400 то выведет сообщение об ошибке.более универсальный способ поиска ошибок
				console.log("error")
			}else{
				var data = xhr.response//если нет то мы увидит данные
				console.log(data)
				for(var i = 0; i < data.length; i++){
					dataKeyTown.push(data[i]["Key"])
				}
			}
		}*/

	/*	xhr.onerror = function(){//в случаее ошибки выведит сообщение
		var error = xhr.response
		console.log("error")
		}*/
	
/*	xhr.send()// отправка запроса

 })
 console.log(dataKeyTown)
*/



/*var url = "https://geocode-maps.yandex.ru/1.x/?apikey=b12d2192-651c-4b7a-84b1-33e75ed80bf3&format=json&geocode=Москва, улица Новый Арбат, дом 24"*/



/*var coordinate = 
 findTemperature.addEventListener("click", function(){

 	var nameTownValue = nameTown.value
 	console.log(nameTownValue)
 	var urlCoordinate = "https://geocode-maps.yandex.ru/1.x/?apikey=b12d2192-651c-4b7a-84b1-33e75ed80bf3&format=json&geocode=" + nameTownValue

 	var xhr = new XMLHttpRequest()

 	xhr.open("GET", urlCoordinate)
 	xhr.responseType = "json"
 	xhr.onload = () => {
		var data = xhr
		
 		for(var i = 0; i < data["response"]["response"]["GeoObjectCollection"]["featureMember"].length; i++){*/
/* 			dataCoordinate.push(data["response"]["response"]["GeoObjectCollection"]["featureMember"][i]["GeoObject"]["Point"]["pos"])*/
 /*			var coordinate = data["response"]["response"]["GeoObjectCollection"]["featureMember"][i]["GeoObject"]["Point"]["pos"]
 			var dataCoordinate = coordinate.split(/\s+/)
 			console.log(dataCoordinate[0])
 			console.log(dataCoordinate[1])



 		}
 	}
 	
 	xhr.send()
 	
 })*/
 


/*655c5c4874475e0103c32e2cffb6174f*/

var urlWather = "http://api.weatherstack.com/current?access_key=655c5c4874475e0103c32e2cffb6174f&query=" + localStorage.getItem("town")

 		var xhrWater = new XMLHttpRequest()
			xhrWater.open("GET", urlWather)
 			xhrWater.responseType = "json"
 			xhrWater.onload = () => {
 				var data = xhrWater["response"]["success"]
 	
 				console.log(data)
 				var temperatureTown = xhrWater["response"]["current"]["temperature"]
 				var nameTown = xhrWater["response"]["location"]["name"]
 				var image = xhrWater["response"]["current"]["weather_icons"][0]
 				console.log(temperatureTown)
 				console.log(nameTown)
 				console.log(image)

 				var temperature = document.createElement("div");
 				temperature.classList.add("temperature");
 				containerResult.appendChild(temperature);
 				temperature.innerHTML = temperatureTown + "&#8451"

 				var boxNameTown = document.createElement("div");
 				boxNameTown.classList.add("town");
 				containerResult.appendChild(boxNameTown)
 				boxNameTown.innerHTML = nameTown

 				var imageWather = document.createElement("img")
 				imageWather.classList.add("image")
 				boxNameTown.appendChild(imageWather)
 				imageWather.setAttribute("src", image)

 			}

 	xhrWater.send()


findTemperature.addEventListener("click", function(){
	findTemperature.style.boxShadow = 3 + "px " + -4 + "px " + 9 + "px " + 2 + "px #2008e8";
	findTemperature.style.background = "#2008e8";
	findTemperature.style.color = "white";

	function resertColor(){
		findTemperature.style.boxShadow = 3 + "px " + -4 + "px " + 9 + "px " + 2 + "px #00000000";
		findTemperature.style.background = "white";
		findTemperature.style.color = "black";
	}
	setTimeout(resertColor, 200);


	containerResult.innerHTML = ""
			var nameTownValue = nameTown.value
			localStorage.setItem("town", nameTown.value)
			console.log(localStorage.getItem("town"))

	 		var urlWather = "http://api.weatherstack.com/current?access_key=655c5c4874475e0103c32e2cffb6174f&query=" +  nameTownValue

 			var xhrWater = new XMLHttpRequest()

 			xhrWater.open("GET", urlWather)
 			xhrWater.responseType = "json"
 			xhrWater.onload = () => {
 				var data = xhrWater["response"]["success"]
 				if(xhrWater["response"]["success"] === false){
 					findTemperature.style.display = "none";

 					var error = document.createElement("div");
 					error.classList.add("container-error");
 					containerResult.appendChild(error);
 					error.innerHTML = "Укажите город";

 					var closedWindowError = document.createElement("div")
 					closedWindowError.classList.add("closed-window-error")
 					error.appendChild(closedWindowError)
 					closedWindowError.innerHTML = "&#9746"

 						closedWindowError.addEventListener("click", function(){
							findTemperature.style.display = "inline-block"
							error.style.display = "none"
						})
 				}
 				console.log(data)
 				var temperatureTown = xhrWater["response"]["current"]["temperature"]
 				var nameTown = xhrWater["response"]["location"]["name"]
 				var image = xhrWater["response"]["current"]["weather_icons"][0]
 				console.log(temperatureTown)
 				console.log(nameTown)
 				console.log(image)

 				var temperature = document.createElement("div");
 				temperature.classList.add("temperature");
 				containerResult.appendChild(temperature);
 				temperature.innerHTML = temperatureTown + "&#8451"

 				var boxNameTown = document.createElement("div");
 				boxNameTown.classList.add("town");
 				containerResult.appendChild(boxNameTown)
 				boxNameTown.innerHTML = nameTown

 				var imageWather = document.createElement("img")
 				imageWather.classList.add("image")
 				boxNameTown.appendChild(imageWather)
 				imageWather.setAttribute("src", image)

 			}

 			
		xhrWater.send()

})
