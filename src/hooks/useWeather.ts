import { useState, useEffect } from 'react';
import { getForecastByCity } from '../api/weather';
import { WeatherForecast } from '../types/weather';

interface UseForecastReturn {
  forecast: WeatherForecast | null;
  error: Error | null;
  loading: boolean;
}

const useForecast = (city: string): UseForecastReturn => {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await getForecastByCity(city);
        setForecast(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { forecast, error, loading };
};

export default useForecast;
