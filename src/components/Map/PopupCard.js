import CapitalizeString from '@/utils/CapitalizeString';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Popup } from 'react-leaflet';

const PopupCard = ({ name, isConfirmed }) => {
  const nameCapitalize = CapitalizeString(name);
  return (
    <>
      <Popup>
        <h3 className='flex text-lg font-bold'>
          {nameCapitalize}
          {isConfirmed ? (
            <BsFillCheckCircleFill className='text-green-500 ml-2' />
          ) : (
            <BsFillCheckCircleFill className='text-gray-400 ml-2' />
          )}
        </h3>
        <div className='mt-4'>
          <a className='btn btn-sm btn-outline'>Get Directions</a>
        </div>
      </Popup>
    </>
  );
};

export default PopupCard;
