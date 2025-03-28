const apiKey = '3b810266dce8dfd2d30e939b8aebf6b1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert("Lütfen geçerli bir şehir adı girin!");
        return;
    }

    fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric&lang=tr`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("Şehir bulunamadı. Lütfen tekrar deneyin.");
                return;
            }

            const cityName = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            document.getElementById('cityName').innerText = `Hava Durumu: ${cityName}`;
            document.getElementById('temperature').innerText = `Sıcaklık: ${temperature}°C`;
            document.getElementById('description').innerText = `Durum: ${description}`;
            document.getElementById('humidity').innerText = `Nem: ${humidity}%`;

            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            alert("Hava durumu verilerini alırken bir hata oluştu.");
        });
}
