import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB7gLiylQ0QNMiOe1yyJhBPTF17TUob6_A`;
  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
    console.log("Response", response);
  }, []);
  return map;
};

export default useGoogleAddress;
