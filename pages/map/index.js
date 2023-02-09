import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import classNames from "classnames";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [count, setCount] = useState(10);
  const [cordinate, setCordinate] = useState([
    { lat: 36.2064141, lng: 37.0783733 },
  ]);
  const [lat, setLan] = useState("");
  const [lng, setLon] = useState("");

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 36.2064141, lng: 37.0783733 }), []);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  const cor = [
    { lat: 36.2064141, lng: 37.0783733 },
    { lat: 33.672932021393862, lng: 22.31184012689732 },
    { lat: 23.672932021393862, lng: 34.31184012689732 },
  ];

  const errors = {};
  const onChangeCounter = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setCount(parseInt(value));
  };
  const changeLan = (eve) => {
    const {
      target: { value },
    } = eve;
    setLan(value);
  };
  const changeLong = (eve) => {
    const {
      target: { value },
    } = eve;
    setLon(value);
  };

  const addCor = (eve) => {
    const temp = { lat: parseFloat(lat), lng: parseFloat(lng) };
    const temp2 = [...cordinate, temp];
    setCordinate(temp2);
    console.log(cordinate);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white font-default">
      <main className="w-full max-w-xl">
        <div className="my-10 flex-col col flex gap-y-10">
          <div className="flex flex-col gap-y-2">
            {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
 
      </Form.Group> */}

            <Form.Label htmlFor="inputPassword5">Lan</Form.Label>
            <Form.Control
              type="text"
              value={lat}
              id="inputPassword5"
              name="lan"
              aria-describedby="passwordHelpBlock"
              onChange={(event) => changeLan(event)}
            />
            <Form.Label htmlFor="inputPassword5">Long</Form.Label>
            <Form.Control
              value={lng}
              type="text"
              name="lon"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={(event) => changeLong(event)}
            />
            <Button onClick={(event) => addCor(event)} variant="primary">
              Add cordinate
            </Button>
          </div>
          <div>
            <Form.Label>Zoom</Form.Label>
            <Form.Range
              value={count}
              onChange={(event) => onChangeCounter(event)}
            />
          </div>
          <GoogleMap
            options={mapOptions}
            zoom={5}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: "800px", height: "800px" }}
            onLoad={() => console.log("Map Component Loaded...")}
          >
            {cordinate &&
              cordinate.map((data, index) => (
                <MarkerF
                  key={index}
                  position={data}
                  onLoad={() => console.log("Marker Loaded")}
                />
              ))}
          </GoogleMap>
        </div>
      </main>
    </div>
  );
};
export default Home;
