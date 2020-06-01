var nameTown = document.querySelector(".name-town");
var findTemperature = document.querySelector(".find-temperature");
var containerResult = document.querySelector(".container-result");

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
