const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathercaption');
const windSpeed = document.querySelector('#wspeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bacoor&units=metric&appid=d9029b510dc9724be1f97bbee9a422d2';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    windSpeed.innerHTML = weatherData.wind.speed;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    
    const chills = document.getElementById('wchill');

    let windchill = 0; 

    if (currentTemp <= 10 && windSpeed > 4.8){

        windchill = 13.12 + 0.6215 * currentTemp - 11.37 * windSpeed ** 0.16 + 0.3965 * currentTemp * windSpeed ** 0.16;
        windchill = windchill.toFixed(1);

    }else{

        windchill = "N/A";
    
    }
    
    chills.textContent = windchill;

}