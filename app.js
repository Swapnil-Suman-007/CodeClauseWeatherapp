
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97ed53b598msh8ff88b0853170b0p181cc5jsn65a89862102d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const weather=(city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
.then(response => response.json())
.then(response=> {
	console.log(response)
	cityname.innerHTML = city;
	humidity.innerHTML = response.humidity;
	cloud_pct.innerHTML= response.cloud_pct;
    //feels_like.innerHTML= response.feels_like;
	max_temp.innerHTML= response.max_temp;
	min_temp.innerHTML = response.min_temp;
	temp.innerHTML= response.temp;
	wind_degrees.innerHTML= response.wind_degrees;
	wind_speed.innerHTML= response.wind_speed;

	var time=(unix_timestamp)=>{
	var date = new Date(unix_timestamp * 1000);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return formattedTime;
    }
    
	var dated=(unix_timestamp)=>{
		var date = new Date(unix_timestamp * 1000);
		var y= date.getMonth();
		var z= date.getDate();
		var dat= z+' / '+y+' / 2023';
		return dat;
	}


	sunrise.innerHTML = time(response.sunrise);
    sunset.innerHTML = time(response.sunset);
	
	if(response.cloud_pct>90)
	{
		document.getElementById("icon").innerHTML= " <i class='fa fa-cloud-showers-heavy' style='font-size:200px;color:blue;'></i> <br><h2>Heavily Cloudy</h2>";
	}
	else if(response.cloud_pct>60)
	{
		document.getElementById("icon").innerHTML= " <i class='fa fa-cloud' style='font-size:200px;color:skyblue;'></i><br><h2>Cloudy</h2>";
	}
	else if(response.cloud_pct <30) {
		document.getElementById("icon").innerHTML= " <i class='fa fa-sun' style='font-size:200px;color:yellow;'></i><br><h2>Sunny</h2>";
	}
	else 
	{   document.getElementById("icon").innerHTML= " <i class='fa fa-cloud-sun' style='font-size:200px;color:aqua;'></i><br><h2>Partially Cloudy</h2>";
	}
	
	if(response.temp>25){
       document.getElementById("icon3").innerHTML="<i class='fa fa-temperature-high'    style='font-size:200px;color:orange;'> </i><br><h2>Hot Weather</h2>";
	}
	else if(response.temp<8)
	{
		document.getElementById("icon3").innerHTML="<i class='fa fa-temperature-low'    style='font-size:200px;color:blue;'></i><br><h2>Cold Weather</h2>";
	}
	else
	{
		document.getElementById("icon3").innerHTML="<i class='fa fa-temperature-low'    style='font-size:200px;color:skyblue;'></i><br><h2>Moderate Weather</h2>";

	}
   date.innerHTML= " <b>"+dated(response.sunset)+"</b>";
   sr.innerHTML=" <b>" + time(response.sunrise)+"</b>";
   ss.innerHTML=" <b>" + time(response.sunset)+"</b>";
})
.catch(err => console.error('request failed', err));
}

weather("Delhi");

submit.addEventListener('click',(e)=>{
	e.preventDefault();
	weather(city.value);
})



