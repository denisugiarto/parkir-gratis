import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const Map = (props) => {
  const [mapAspectRatio, setMapAspectRatio] = useState('aspect-video');
  const DEFAULT_WIDTH = 600;
  const DEFAULT_HEIGHT = 600;
  useEffect(() => {
    const widthScreen = window.innerWidth;
    const heightScreen =
      widthScreen <= 500 ? window.innerHeight - 50 : window.innerHeight;
    const aspectRatio = ` ${widthScreen} / ${heightScreen}`;
    setMapAspectRatio(aspectRatio);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(aspectRatio);
  }, []);

  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div style={{ aspectRatio: mapAspectRatio }}>
      <DynamicMap {...props} />
    </div>
  );
};

export default Map;
