const today = new Date();

// Function to Retrieve Data
async function updateData() {
  const request = await fetch("/");
  console.log(request);
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log("allData", allData);
    // Write updated data to DOM elements
    const tripdetiles = document.querySelector(".trip-detiles");

    if (allData.date == today) {
      tripdetiles.innerHTML = ` <div class="trip">
        <div id="photo">
        <img class="trip-img" src="${allData.photo}" alt="${allData.city} "></div>
        <div id="cityName">Trip to : ${allData.city}</div>
        <div id="todate">Leaving date is :  ${allData.date}</div>
        <div id="weather">The weather will be ${allData.weather_des},${allData.temp}&deg;C degree</div>
        </div>`;
    } else {
      tripdetiles.innerHTML = `<div class="trip">
        <div id="photo">
        <img class="trip-img" src="${allData.photo}" alt="${allData.city} "></div>
        <div id="cityName">Trip to : ${allData.city}</div>
        <div id="todate">Leaving date is :  ${allData.date}</div>
        <div id="weather"> Weather forecast is ${allData.weather_des},${allData.temp}&deg;C degree</div>
        </div>`;
    }
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

export { updateData };
