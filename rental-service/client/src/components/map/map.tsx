import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map';
import type { OffersList } from '../../types/offer';
import { AppRoute } from '../../const';


const defaultIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type MapProps = {
  offers: OffersList[];
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  selectedOfferId?: string;
};

function Map({ offers, city, selectedOfferId }: MapProps): React.JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<L.Marker[]>([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (map) {
      
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      
      offers.forEach((offer) => {
        const isSelected = selectedOfferId === offer.id;
        
        
        const marker = L.marker(
          [offer.location.latitude, offer.location.longitude],
          { 
            icon: isSelected ? activeIcon : defaultIcon 
          }
        ).addTo(map);

        
        marker.on('mouseover', function() {
          if (!isSelected) {
            this.setIcon(activeIcon);
          }
        });

        marker.on('mouseout', function() {
          if (!isSelected) {
            this.setIcon(defaultIcon);
          }
        });

        
        marker.on('click', () => {
       
          navigate(`${AppRoute.Offer}/${offer.id}`);
        });

        markersRef.current.push(marker);
      });
    }
  }, [map, offers, selectedOfferId, navigate]);

  return <div ref={mapRef} style={{ height: '100%' }}></div>;
}

export { Map };