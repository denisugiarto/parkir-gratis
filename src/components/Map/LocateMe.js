import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
// import {icon} from  '/public/leaflet/images/marker-icon.png'

const LocateMe = () => {
    const [position, setPosition] = useState(null);
    const [box, setBox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        // console.log(position);
        setBox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          You are here. <br />
          Map box: <br />
          <b>Southwest lng</b>: {box[0]} <br />
          <b>Southwest lat</b>: {box[1]} <br />
          <b>Northeast lng</b>: {box[2]} <br />
          <b>Northeast lat</b>: {box[3]}
        </Popup>
      </Marker>
    );
};

export default LocateMe;
