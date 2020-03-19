import React, { useState, useEffect } from 'react';
import Header from "./Header"
import Map from "./Map"
import Content from "./Content"
import key from "./apikey"
import SpotData from "./SpotData"

let spotNumber: number = 1
let countNumber: number = 0
let interval: NodeJS.Timeout
let paused: boolean = false

interface State {
  name: string,
  description: string,
  location: { lat: number | null, lng: number | null },
  key: number
}

const Layout: React.FC = () => {
  const [spot, setSpot] = useState<State>({
    name: "",
    description: "",
    location: { lat: null, lng: null },
    key: 0
  })
  const [count, setCount] = useState(0)

  const touring = (num: number) => {
    paused = false
    countNumber = 0
    setCount(0)
    clearInterval(interval)
    setSpot(SpotData[num])
    spotNumber = num
    interval = setInterval(()=>{
      if(!paused){
        console.log(count)
        if(countNumber === 10){
          countNumber = 0
          setCount(0)
          if(spotNumber < SpotData.length - 1) spotNumber++
          else spotNumber = 0
          setSpot(SpotData[spotNumber])
        } else {
          countNumber++
          setCount(countNumber)
        }
      }
    },1000)
  }

  const pause = () =>{
    paused = !paused
  }
  const next = () =>{
    if(spotNumber === SpotData.length - 1) touring(0)
    else touring(spotNumber + 1)
  }

  useEffect(()=>{
    touring(0)
  },[])

  return (
    <div style={{fontFamily:"Bellota Text"}}>
      <Header currentSpot={spot.name} touring={touring}  />
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
        containerElement={<div style={{ height: `80vh`}} />}
        mapElement={<div style={{ height: `100%` }} />}
        loadingElement={<div style={{ height: `100%` }} />}
        spot={spot}
      />
      <Content spot={spot} pause={pause} next={next} />
      <div
        style={{
          width: `${count*10}%`,
          backgroundColor: "rgba(150,0,0,0.5)",
          height: "1.5vh",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default Layout;
