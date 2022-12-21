const today = new Date();

// Function to Retrieve Data
async function updateData() {
   try {
    // Write updated data to DOM elements
    const tripdetiles = document.querySelector(".trip-detiles");
    if (data.date == today) {
      tripdetiles.innerHTML = ` <div class="trip">
        <div id="photo">
        <img class="trip-img" src="${data.photo}" alt="${data.city} "></div>
        <div id="cityName">Trip to : ${data.city}</div>
        <div id="todate">Leaving date is :  ${data.date}</div>
        <div id="weather">The weather will be ${data.weather_des},${data.temp}&deg;C degree</div>
        </div>`;
    } else {
      tripdetiles.innerHTML = `<div class="trip">
        <div id="photo">
        <img class="trip-img" src="${data.photo}" alt="${data.city} "></div>
        <div id="cityName">Trip to : ${data.city}</div>
        <div id="todate">Leaving date is :  ${data.date}</div>
        <div id="weather"> Weather forecast is ${data.weather_des},${data.temp}&deg;C degree</div>
        </div>`;
    }
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

export { updateData };
