const APIKey = "9d1b87a45ab583048cab74832ee45c38"
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
console.log(document.getElementById("input").value);
async function WeatherData(){
    const city = document.getElementById("input").value;
    console.log(city);
    if(city==""){
        alert("Please Enter the city");
    }
    else{
        const response = await fetch(APIUrl+`&q=${city}&appid=${APIKey}`);
        var data = await response.json();
        console.log(data);
        if(response.status==404){
            alert("Please enter correct city name");
        }
        else{ 
            document.getElementById("city").innerHTML = data.name;
            console.log(data.name);
            const main_data = data.main;
            document.getElementById("temp").innerHTML = main_data.temp + `&deg;c`;
            document.getElementById("humidity").innerHTML = main_data.humidity+`%`;
            document.getElementById("wind").innerHTML = data.wind.speed+`km/h`;
            const desc = data.weather[0].main;
            console.log(desc);
            if(desc=="Clouds"){
                document.body.style.backgroundImage="url(cloudy.jpeg)";
            }
            else if(desc=="Clear"){
                document.body.style.backgroundImage="url(Sunny.png)";
            }
            else if(desc=="Rain"){
                document.body.style.backgroundImage="url(Rain.jpeg)";
            }

        }
     }
 }