import React, { useState, useEffect } from 'react';
import Header from "./Header"
import Map from "./Map"
import Content from "./Content"
import key from "./apikey"
import SpotData from "./SpotData"

let spotNumber:number = 1

interface State {
  name: string,
  description: string,
  location: { lat: number | null, lng: number | null } 
}

const Layout: React.FC = () => {
  const [spot, setSpot] = useState<State>({
    name: "",
    description: "",
    location: { lat: null, lng: null } 
  })

  useEffect(()=>{
    setSpot(SpotData[0])
    setInterval(()=>{
      setSpot(SpotData[spotNumber])
      if(spotNumber < SpotData.length - 1) spotNumber++
      else spotNumber = 0
    },10000)
  },[])

  return (
    <div style={{fontFamily:"Bellota Text"}}>
      <Header currentSpot={spot.name} />
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
        containerElement={<div style={{ height: `80vh`}} />}
        mapElement={<div style={{ height: `100%` }} />}
        loadingElement={<div style={{ height: `100%` }} />}
        spot={spot}
      />
      <Content name={spot.name} description={spot.description} />
    </div>
  );
}

export default Layout;
