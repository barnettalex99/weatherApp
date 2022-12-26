const APIurl = 'https://api.openweathermap.org/data/2.5/weather?lat=35.9162&lon=-79.0999&appid=11ffb2188af2c2489b6f36c435f578f4';
const infoContainer = document.getElementById('info-container');
const imageContainer = document.getElementById('image-container');

function convertData(data) {
  const {
    main: { temp: temperature, feels_like: feelsLike, humidity },
    wind: { speed: windSpeed },
    weather: { 0: descriptionObject },
  } = data;
  return {
    temperature, feelsLike, humidity, windSpeed, descriptionObject,
  };
}

function addDesc(descInput) {
  // add icon stuff in if statement
  const descDiv = document.createElement('div');
  descDiv.innerHTML = `Current Weather: ${ descInput}`;
  infoContainer.appendChild(descDiv);
}

function addTemp(tempInput) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = `Current Temperature: ${ tempInput} F`;
  infoContainer.appendChild(tempDiv);
}

function addFeelsLike(feelsLikeInput) {
  const feelsLikeDiv = document.createElement('div');
  feelsLikeDiv.innerHTML = `Currently Feels Like: ${ feelsLikeInput} F`;
  infoContainer.appendChild(feelsLikeDiv);
}

function addWindSpeed(windInput) {
  const windDiv = document.createElement('div');
  windDiv.innerHTML = `Wind speed: ${ windInput} mph`;
  infoContainer.appendChild(windDiv);
}

function addHumidity(humidityInput) {
  const humidityDiv = document.createElement('div');
  humidityDiv.innerHTML = `Current Humidity: ${ humidityInput} %`;
  infoContainer.appendChild(humidityDiv);
}

function convertTemperature(tempK) {
  let tempF = Math.round(1.8 * (tempK - 273) + 32);
  return tempF;
}

function addIcon(descInput) {
  const image = document.createElement('img');
  if (descInput === 'Clear') {
    image.src = '/Users/alex/repos/weatherApp/icons/clear-icon.png';
    image.style.height = '75px';
    image.style.width = '75px';
    image.style.padding = '50px';
  } else if (descInput === 'Thunderstorm') {
    image.src = '/Users/alex/repos/weatherApp/icons/storms-icon.png';
    image.style.height = '75px';
    image.style.width = '75px';
    image.style.padding = '50px';
  } else if (descInput === 'Drizzle' || descInput === 'Rain') {
    image.src = '/Users/alex/repos/weatherApp/icons/rain-icon.png';
    image.style.height = '75px';
    image.style.width = '75px';
    image.style.padding = '50px';
  } else if (descInput === 'Snow') {
    image.src = '/Users/alex/repos/weatherApp/icons/snow-icon.png';
    image.style.height = '75px';
    image.style.width = '75px';
    image.style.padding = '50px';
  } else {
    image.src = '/Users/alex/repos/weatherApp/icons/cloudy-icon.png';
    image.style.height = '75px';
    image.style.width = '75px';
    image.style.padding = '50px';
  }
  imageContainer.appendChild(image);
}

async function getData() {
  // gets data and saves it in values
  const response = await fetch(APIurl, {
    mode: 'cors',
  });
  const data = await response.json();
  const dataObject = convertData(data);
  let tempValue = dataObject.temperature;
  let feelsLikeValue = dataObject.feelsLike;
  const humidityValue = dataObject.humidity;
  const windspeedValue = dataObject.windSpeed;
  const descriptionValue = dataObject.descriptionObject.main;
  // converts temperatures to degrees F
  tempValue = convertTemperature(tempValue);
  feelsLikeValue = convertTemperature(feelsLikeValue);
  //create DOM functions
  addDesc(descriptionValue);
  addTemp(tempValue);
  addFeelsLike(feelsLikeValue);
  addWindSpeed(windspeedValue);
  addHumidity(humidityValue);
  addIcon(descriptionValue);
}

function initializeWebsite() {
  // insert DOM elements here
  getData();
}

export default initializeWebsite;
