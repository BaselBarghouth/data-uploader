import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';


const Home = () => {
const [count, setCount] = useState(20);
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCatnJPPhSFXQMV-5IV-DCExJdcB4V26-g' ,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
const cor = [
    { lat: 27.672932021393862, lng: 85.31184012689732 },
    { lat: 33.672932021393862, lng: 22.31184012689732 },
    { lat: 23.672932021393862, lng: 34.31184012689732 }

]

  
const inc = (event) => {
  setCount(count + 1);
};

const dec = () => {
  setCount(count - 1);
}

  return (
    <div >
      <div>
      <div>
      <button onClick={dec}>-</button>

      <input type="number" value={count} />

      <button onClick={inc}>+</button>
    </div>
      </div>
   
      <GoogleMap
        options={mapOptions}
        zoom={count}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        {cor && cor.map((data,index)=> <MarkerF position={data} onLoad={() => console.log('Marker Loaded')} />)}
       
        </GoogleMap>
    </div>
  );
};
export default Home;
