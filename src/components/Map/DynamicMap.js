import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LocateMe from './LocateMe';
import Locate from 'leaflet.locatecontrol';

const { MapContainer, useMap } = ReactLeaflet;

function MyLocation() {
  const LocationControl = new Locate();
  const map = useMap();
  map.addControl(LocationControl);
}

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = 'w-full h-full';

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png'
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      <ReactLeaflet.TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <LocateMe /> */}
      {/* <MyLocation /> */}
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
