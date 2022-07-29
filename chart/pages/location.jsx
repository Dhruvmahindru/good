import React from 'react'
import Geocode from 'react-geocode'
import {useEffect} from 'react'

Geocode.setApiKey("AIzaSyCrsE_8LAXdiqVh9EUosD2d9vK5hbDKo10");
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");

function location() {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }, [])
    

    function getme(){
        Geocode.fromLatLng('31.6419435','74.858132').then(
            (response) => {
              const address = response.results[0].formatted_address;
              console.log(address);
            },
            (error) => {
              console.error(error);
            }
          );
    }
  return (
    <div>
get location
<button onClick={getme}>get me</button>
    </div>
  )
}


export default location