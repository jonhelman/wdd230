const weatherForecast1 = document.querySelector('#foreicon1');
const weatherForecast2 = document.querySelector('#foreicon2');
const weatherForecast3 = document.querySelector('#foreicon3');

const forecastDay1 = document.querySelector('#foreday1');
const forecastDay2 = document.querySelector('#foreday2');
const forecastDay3 = document.querySelector('#foreday3');

//var d = new Date();
//var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,CA,US&appid=4fdeebdbea2a635fc84c7084a0af729f';

async function apiFetch() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayForecast(forecastData) {
  const weatherIcon1 = `https://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`;
  const desc1 = forecastData.list[0].weather.description;

  const weatherIcon2 = `https://openweathermap.org/img/w/${forecastData.list[8].weather[0].icon}.png`;
  const desc2 = forecastData.list[8].weather.description;

  const weatherIcon3 = `https://openweathermap.org/img/w/${forecastData.list[16].weather[0].icon}.png`;
  const desc3 = forecastData.list[16].weather.description;


  weatherForecast1.setAttribute('src', weatherIcon1);
  weatherForecast1.setAttribute('alt', desc1);

  
  weatherForecast2.setAttribute('src', weatherIcon2);
  weatherForecast2.setAttribute('alt', desc2);

  
  weatherForecast3.setAttribute('src', weatherIcon3);
  weatherForecast3.setAttribute('alt', desc3);


const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//day 1
const d1 = new Date();
d1.setDate(d1.getDate() + 1);
const firstday = d1.getDay();

const nextDayName = weekday[firstday];
forecastDay1.innerHTML = `${nextDayName}`;

//day 2
const d2 = new Date();
d2.setDate(d2.getDate() + 2);
const secondday = d2.getDay();

const twoDays = weekday[secondday];
forecastDay2.innerHTML = `${twoDays}`;

//day 3
const d3 = new Date();
d3.setDate(d3.getDate() + 3);
const thirdday = d3.getDay();

const threeDays = weekday[thirdday];
forecastDay3.innerHTML = `${threeDays}`;

}






