import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"

interface Props {
  spot:{
    name: string,
    description: string,
    location: { lat: number | null, lng: number | null },
    key: number
  }
}

const Map: React.FC<Props> = ({ spot }) => {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 0, lng: 0 }}
      center={{ lat: spot.location.lat, lng: spot.location.lng }}
    >
      <Marker
        title={spot.name}
        position={{ lat: spot.location.lat, lng: spot.location.lng }}
      />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));