import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MdNearMe } from 'react-icons/md';
import Control from 'react-leaflet-custom-control';
import { useMap } from 'react-leaflet/hooks';
import SetIcon from './SetIcon';
// import {icon} from  '/public/leaflet/images/marker-icon.png'

const LocateMe = () => {
  const [position, setPosition] = useState(null);
  const [box, setBox] = useState([]);

  const map = useMap();

  function getLocation() {
    map.locate({ setView: true, maxZoom: 16 });
  }
  const myLocation = SetIcon({
    iconUrl: 'leaflet/images/marker-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -6],
  });

  function onLocationFound(e) {
    let radius = e.accuracy;
    L.marker(e.latlng, { icon: myLocation })
      .addTo(map)
      .bindPopup(`You  are within ${radius} meters from this point`)
      .openPopup();
    L.circle(e.latlng, radius).addTo(map);
  }
  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  // useEffect(() => {
  //   getLocation;
  // }, []);

  return (
    <Control prepend position='bottomright'>
      <button className='btn btn-primary btn-sm' onClick={getLocation}>
        <MdNearMe height={32} width={32} />
      </button>
    </Control>
  );
};

export default LocateMe;
