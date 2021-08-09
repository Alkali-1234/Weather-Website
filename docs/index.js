// const randomext = require('random-ext');
let date = new Date();
const currentTime = date.getHours();
const button = document.getElementById("buttonsubmit");
const currentweather = document.getElementById("current");
const input = document.getElementById("input");
const error = document.getElementById("error");
const city = ["jakarta", "bandung", "bogor"];
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const icontemp = document.getElementById("icon");
let valid = false;
if(localStorage.key("time") == null){
    localStorage.setItem("time", date.getSeconds());
}
// const load = function(url){
//     let request = new XMLHttpRequest();
    
//     request.addEventListener("readystatechange", function(event){
//         if(this.readyState == 4 && this.status == 200){
//             var json = JSON.parse(this.responseText);
//             console.log(this.responseText);
//             console.log(json.minutebefore);
//         }
        
//     });

//     request.open("GET", url);
//     request.send(null);
// };
// load("1hour.json");





let reset = function(){
    localStorage.clear();
}

console.log(currentTime);
button.addEventListener("click", ()=>{
    date = new Date();
    console.log(parseInt(localStorage.getItem("time")));
    console.log(date.getSeconds());

        // if(parseInt(localStorage.getItem("time")) - date.getSeconds() < 0){
        //     localStorage.setItem("time", date.getSeconds());
        // }else if(date.getSeconds() - parseInt(localStorage.getItem("time")) < 10){
        //     console.log("There is a 10 second cooldown between searches");
        //     return null;
        // }else{
        //     localStorage.setItem("time", date.getSeconds());
        // }



        
        if(error.innerText) error.innerText = null;
        const valueLower = input.value.toLowerCase();
        valueLower[0] = valueLower[0].toUpperCase();
            // random = randomExt.intiger(5, 1);
        console.log();
        weather.innerText = "-";
        temp.innerText = "-";
        $.getJSON("https://api.weatherbit.io/v2.0/current?city="+ input.value +"&key=c2e69ed2cbea4d4ea79a241a0cbe3d6d", 
            function(data){
                if(!data){
                    error.style.color = "red";
                    error.innerText = "Please enter a valid city name";
                }
                console.log(data);
                let description = data.data[0].weather.description;
                let temperature = data.data[0].app_temp + "C";
                let currentweather2 = data.data[0].city_name;
                let icon = "https://www.weatherbit.io/static/img/icons/" + data.data[0].weather.icon + ".png";
                // let icon = data.weather[0].icon;
                // console.log(icon);
                // let icon2 = "https://www.weatherbit.io/static/img/icons/" + icon;
                weather.innerText = description;
                temp.innerText = temperature;
                currentweather.innerText = currentweather2;
                icontemp.src = icon;
                valid = true;

            }
        );
});
