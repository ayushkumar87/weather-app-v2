import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [currentCity, setCurrentCity] = useState('London');
    const [coordinates, setCoordinates] = useState(null); // { lat, lon }

    const updateCity = (city, lat = null, lon = null) => {
        setCurrentCity(city);
        if (lat && lon) {
            setCoordinates({ lat, lon });
        } else {
            // keep null or clear? If user searches by name, we might not have coords immediately
            setCoordinates(null);
        }
    };

    return (
        <WeatherContext.Provider value={{ currentCity, coordinates, updateCity }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => useContext(WeatherContext);
