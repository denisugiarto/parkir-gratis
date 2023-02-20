import React, { useEffect, useState } from 'react';
import { LayersControl, Marker, LayerGroup } from 'react-leaflet';
import PopupCard from './PopupCard';
import SetIcon from './SetIcon';
import axios from 'axios';

const MapLayerGroup = ({api, icon, layerName }) => {
  const [locationData, setLocationData] = useState([]);
  useEffect(() => {
    axios
      .get(api)
      .then(function (response) {
        const responseData = response.data.data;

        const dataBuffer = responseData.map((data) => {
          if (data.attributes.location) {
            data.attributes.location = data.attributes.location
              .split(',')
              .map((number) => Number(number));
          }
          return data;
        });

        setLocationData(dataBuffer);
      })
      .catch(function (error) {
        alert('error: ', error);
      });
  }, [api]);
  
  return (
    <LayersControl.Overlay checked name={layerName}>
      <LayerGroup>
        {locationData.map((location) => {
          return (
            <Marker
              key={location.id}
              position={location.attributes.location}
              icon={icon}
            >
              <PopupCard
                name={location.attributes.name}
                isConfirmed={location.attributes.isConfirmed}
              />
            </Marker>
          );
        })}
      </LayerGroup>
    </LayersControl.Overlay>
  );
};

export default MapLayerGroup;
