async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5ac2a5e1737600d0f0621fa594fe96bc"; // Ganti dengan API key dari openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=id`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Kota tidak ditemukan");

    const data = await response.json();
    const result = `
      Cuaca di <b>${data.name}</b><br/>
      Suhu: ${data.main.temp}°C<br/>
      Cuaca: ${data.weather[0].description}
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    document.getElementById("weatherResult").textContent = "Gagal memuat data cuaca.";
  }
}