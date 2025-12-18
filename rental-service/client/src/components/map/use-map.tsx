import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

function useMap(
  mapRef: React.RefObject<HTMLElement | null>,
  city: {
    name: string;
    location: CityLocation;
  }
) {
  const [map, setMap] = useState<L.Map | null>(null);
  const isRenderedRef = useRef(false);
  const prevCityRef = useRef(city.name); 

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
      });

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
      prevCityRef.current = city.name;
    } else if (map && prevCityRef.current !== city.name) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      prevCityRef.current = city.name;
    }
  }, [mapRef, city, map]); 
  return map;
}

export default useMap;