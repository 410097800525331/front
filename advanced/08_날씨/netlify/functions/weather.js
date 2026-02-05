export async function handler(event) {
  const city = event.queryStringParameters.city || "Seoul";
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: "API Key not configured"
    };
  }

  try {
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${city}&units=metric&lang=kr&appid=${API_KEY}`
    );
    const weatherData = await weatherRes.json();

    if (weatherData.cod !== 200) {
      return {
        statusCode: 400,
        body: JSON.stringify(weatherData)
      };
    }

    const { lat, lon } = weatherData.coord;

    const airRes = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution` +
      `?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const airData = await airRes.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weather: weatherData,
        air: airData
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: "Server error"
    };
  }
}