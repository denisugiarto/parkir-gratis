import Layout from '@/components/Layout';
import Map from '@/components/Map';
import { Inter } from '@next/font/google';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';
const DEFAULT_CENTER = [-7.02719, 107.52881];

export default function Home() {
  const [myPosition, setMyPosition] = useState(DEFAULT_CENTER);
  const [locationData, setLocationData] = useState([]);
  const locateMeHandler = () => {
    setMyPosition([-6.23, 107.1]);
    // console.log(locationData);
  };

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/free-parks')
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
        console.log('error: ', error);
      });
  }, []);

  return (
    <Layout title='Parkir Gratis'>
      <div className='rounded-lg'>
        <Map
          center={DEFAULT_CENTER}
          zoom={12}
        >
          {({ Marker, Popup }) => (
            <>
              {locationData.map((location) => {
                return (
                  <Marker
                    key={location.id}
                    position={location.attributes.location}
                  >
                    <Popup>
                      <h3 className='flex text-xl font-bold'>
                        {location.attributes.name}
                        {location.attributes.isConfirmed ? (
                          <BsFillCheckCircleFill className='text-green-500 ml-2' />
                          ) : (
                            <BsFillCheckCircleFill className='text-gray-400 ml-2' />
                        )}
                      </h3>
                      <a className='rounded-full bg-blue-300 text-white px-'>Get Directions</a>
                    </Popup>
                  </Marker>
                );
              })}
            </>
          )}
        </Map>

      </div>
    </Layout>
  );
}
