// Function to POST data
async function postData(url = "", data = {}) {
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      city: data.city,
      temp: data.temp,
      weather_icon: data.weather_icon,
      weather_des: data.weather_des,
      date: data.date,
      photo: data.photo,
    }),
  });
  try {
    const newData = await req.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
}

export { postData };
