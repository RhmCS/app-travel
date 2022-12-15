/* Global Variables */

let allData = {};
const username = "rioo";
const weatherbitKey = `b9bf8157e70249a894063796a5419b49`;
const pixabayKey = `31972686-b421cbabf0bef60dac72cfb11`;
const geourl = `http://api.geonames.org/searchJSON?q=`;
const apiurl = `&maxRows=1&username=${username}`;
const forecastAPI = `https://api.weatherbit.io/v2.0/forecast/daily?lat=`;
const pixabayAPI = `https://pixabay.com/api/?key=${pixabayKey}&q=`;
const pixabayApiSearch = `&image_type=photo`;

async function getData(cityName, date) {
  const geonamesURL = `${geourl}+${cityName}+${apiurl}`;
  const geonRes = await fetch(geonamesURL);
  const geonData = await geonRes.json();

  allData = { lat: geonData.geonames[0].lat, lng: geonData.geonames[0].lng };

  const weatherbitRes = await fetch(
    `${forecastAPI}${allData.lat}&lon=${allData.lng}&key=${weatherbitKey}`
  );
  const weatherData = await weatherbitRes.json();

  const pixabayRes = await fetch(
    `${pixabayAPI}+${cityName}${pixabayApiSearch}`
  );
  const pixabayData = await pixabayRes.json();

  allData = {
    city: weatherData.city_name,
    temp: weatherData.data[0].temp,
    weather_icon: weatherData.data[0].weather.icon,
    weather_des: weatherData.data[0].weather.description,
    date: date,
    photo: pixabayData.hits[0].largeImageURL,
  };
  return allData;
}

export { getData };
