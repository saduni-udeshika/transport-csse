import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  TransitLayer,
  Marker,
} from "@react-google-maps/api";
import "./Map.css";

const Map = (props) => {
  return (
    <GoogleMap
      id="marker-example"
      zoom={12}
      center={{ lat: 6.9271, lng: 79.9 }}
      mapContainerClassName="map"
    >
      <TransitLayer />
      {props.polylines.map((line, index) => (
        <Polyline path={line} key={index} />
      ))}
      {props.markers &&
        props.markers.map((marker, index) => <Marker position={marker} />)}
    </GoogleMap>
  );
};

export const MapComponent = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });
  return isLoaded ? <Map {...props} /> : <div>Loading Map</div>;
};
