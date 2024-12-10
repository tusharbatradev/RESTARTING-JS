let city = document.getElementById('city').value;

function handleSearch(){
    let city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4dbb1ab89450205e8e08c65939cff193`).then(res => res.json()).then(json => {
        console.log(json.main);
        let degree = json.main.temp - 271.15
        document.getElementById('degree').innerHTML = `${degree}°C`;
        document.getElementById('description').innerHTML = json.weather[0].description;
        document.getElementById('humidity').innerHTML = json.main.humidity;
    }
    )   
}

