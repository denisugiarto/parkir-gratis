import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false,
});

const DEFAULT_CENTER = [-7.02719, 107.52881];
const Map = (props) => {
  return (
    <>
      <DynamicMap center={DEFAULT_CENTER} zoom={12} {...props} />
    </>
  );
};

export default Map;
