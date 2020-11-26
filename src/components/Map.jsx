import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = ({ data }) => {
  console.log(data);
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyB7gLiylQ0QNMiOe1yyJhBPTF17TUob6_A">
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
