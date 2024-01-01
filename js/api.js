const API_KEY = "";

// Donksiyon sehir ve birim bilgilerini parametre olarak alır.
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    // Eger istek başarılı değilse hata ver
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    // api'den gelen yanıtı JSON formatına dönüştür ve geri dönder.
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
// fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir bir hale getir.
export default fetchWeatherData;