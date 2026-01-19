import React, { useState, useEffect } from 'react';
import './Pages.css';
import { Search } from 'lucide-react';
import { getOwmIconUrl, getWeatherDescription } from '../utils/weatherUtils';
import { useWeather } from '../context/WeatherContext';

const Forecast = () => {
    const { currentCity, coordinates, updateCity } = useWeather();
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchForecast = async (cityName, lat, lon) => {
        try {
            setLoading(true);
            let url = `/api/weather/full?`;
            if (lat && lon) url += `lat=${lat}&lon=${lon}`;
            else url += `city=${cityName}`;

            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed");
            const data = await res.json();

            // Open-Meteo gives daily arrays. Simplifies things greatly!
            // daily: { time: [...], temperature_2m_max: [...], ... }

            const daily = data.daily;
            const formatted = daily.time.slice(0, 5).map((date, i) => ({
                date,
                maxTemp: daily.temperature_2m_max[i],
                minTemp: daily.temperature_2m_min[i],
                weatherCode: daily.weather_code[i],
                precipSum: daily.precipitation_sum[i]
            }));

            setForecast(formatted);

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch based on context
        if (coordinates) {
            fetchForecast(null, coordinates.lat, coordinates.lon);
        } else {
            fetchForecast(currentCity);
        }
    }, [currentCity, coordinates]);

    return (
        <div className="page-container">
            <header className="home-header">
                <h1>5-Day Forecast</h1>
                <p>Detailed forecast for {currentCity}</p>
            </header>

            {loading && <div className="loader">Loading...</div>}

            <div className="forecast-grid">
                {forecast.map((day) => {
                    const dateObj = new Date(day.date);
                    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

                    return (
                        <div key={day.date} className="forecast-card fade-in">
                            <div className="forecast-date">{dayName}</div>
                            <img
                                src={getOwmIconUrl(day.weatherCode)}
                                alt="icon"
                            />
                            <div className="forecast-temp">
                                {Math.round(day.maxTemp)}° <span style={{ fontSize: '1rem', opacity: 0.7 }}>/ {Math.round(day.minTemp)}°</span>
                            </div>
                            <div className="forecast-desc">{getWeatherDescription(day.weatherCode)}</div>
                            <div className="forecast-stats">
                                {day.precipSum > 0 && <span>☔ {day.precipSum}mm</span>}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Forecast;
