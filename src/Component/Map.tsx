import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

const Map: React.FC = () => {
  return (
    <GoogleMap />
  );
}

const Wrap = withScriptjs(withGoogleMap(Map))

export default Wrap;
