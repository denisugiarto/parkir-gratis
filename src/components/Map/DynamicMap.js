import 'leaflet/dist/leaflet.css';
import * as ReactLeaflet from 'react-leaflet';
import LocateMe from './LocateMe';
import MapLayerGroup from './MapLayerGroup';
import SetIcon from './SetIcon';

const {
  MapContainer,
  useMap,
  LayersControl,
  Marker,
  Popup,
  LayerGroup,
  Circle,
  FeatureGroup,
  Rectangle,
} = ReactLeaflet;

function MyLocation() {
  const LocationControl = new Locate();
  const map = useMap();
  map.addControl(LocationControl);
}

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = 'w-screen h-full';

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  const iconAlfamart = SetIcon({
    iconUrl: 'logo_alfamart.png',
    iconSize: [75, 29],
    iconAnchor: [38, 15],
    popupAnchor: [0, -10],
  });

  const iconIndomaret = SetIcon({
    iconUrl: 'logo_indomaret.png',
    iconSize: [80, 28],
    iconAnchor: [40, 14],
    popupAnchor: [0, -7],
  });

  return (
    <MapContainer
      className={mapClassName}
      scrollWheelZoom={false}
      style={{ height: '600px' }}
      {...rest}
    >
      <ReactLeaflet.TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <LocateMe />
      {/* <MyLocation /> */}
      <LayersControl position='topright'>
        <MapLayerGroup
          api='http://localhost:1337/api/free-parks?filters[name][$contains]=indomaret'
          icon={iconIndomaret}
          layerName='Indomaret'
        />
        <MapLayerGroup
          api='http://localhost:1337/api/free-parks?filters[name][$contains]=alfamart'
          icon={iconAlfamart}
          layerName='Alfamart'
        />
      </LayersControl>
      {/* {children(ReactLeaflet, Leaflet)} */}
    </MapContainer>
  );
};

export default Map;
