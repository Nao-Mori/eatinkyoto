import React, { useEffect, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

interface Props {
  spot:{
    name: string,
    description: string,
    location: { lat: number, lng: number },
    url: string,
    key: number
  }
}

interface State {
  lat: number,
  lng: number
}

const Map: React.FC<Props> = ({ spot }) => {
  const [location, setLocation] = useState<State>({ lat: 0, lng: 0 })

  useEffect(()=>{
    console.log("change")
    setLocation({ lat: spot.location.lat, lng: spot.location.lng })
  },[spot.location])

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 0, lng: 0 }}
      center={{ lat: location.lat - 0.0005, lng: location.lng }}
    >
      <Marker
        title={spot.name}
        position={{ lat: location.lat, lng: location.lng }}
      />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));