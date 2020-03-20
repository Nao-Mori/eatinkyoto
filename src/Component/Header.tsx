import React, { useState, useEffect } from 'react';
import { ViewHeadline } from '@material-ui/icons';
import { animated, useSpring } from "react-spring"
import SpotData from "./SpotData"

interface Props {
  currentSpot: string,
  touring: any
}

const Header: React.FC<Props> = ({ currentSpot, touring }) => {
  const [navShow, setNavShow] = useState(false)
  const fade = useSpring({
    position:"fixed",
    top: 0,
    left: !navShow? "100%":"0%",
    zIndex: 1,
    width:"100vw",
    height:"100vh",
    marginLeft:"310px",
    opacity: navShow? 1:0
  })
  const slide = useSpring({
    position: "fixed",
    top: 0,
    height:"100vh",
    left: !navShow? "-100%": "0%",
    backgroundColor: "rgba(70,0,0,0.9)",
    padding: "60px 40px 0px 25px",
    color: "white",
    width: "250px",
    overflow: "auto",
    zIndex: 1,
  })

  useEffect(()=>{
    if(typeof window.orientation === "undefined") setNavShow(true)
  },[])

  return (
    <>
      <animated.div style={fade} className="back" onClick={()=>setNavShow(false)} />
        <animated.div style={slide}>
          <h2>Tour Spots</h2>
          <ul>
          {SpotData.map((spot, key)=>{
            return (
            <li
              key={key}
              style={ spot.name === currentSpot ? {
                color: "orange",
              }:{}}
              onClick = {()=>{
                touring(key)
                if(typeof window.orientation !== "undefined") setNavShow(false)
              }}
            >
              {spot.name}
            </li>
            )
          })}
          </ul>
          <h3 style={{marginTop:"100px"}}>Tell me your favorite spot!</h3>
          <h4 style={{margin:0, paddingTop:"10px"}}>Name</h4>
          <input />
          <h4 style={{margin:0, paddingTop:"10px"}}>Address / Google Maps Link</h4>
          <input />
          <h4 style={{margin:0, paddingTop:"10px"}}>Description (optional)</h4>
          <textarea  />
          <br/>
          <button>SEND</button>
          <div style={{height:"25vh"}}/>
        </animated.div>
        
      <div
        style={{
          position:"fixed",
          width:"100vw",
          top: 0,
          left:0,
          backgroundColor:"rgba(50,0,0,0.9)",
          boxShadow:"0 0 20px rgba(0,0,0,0.6)",
          color:"white",
          zIndex: 1,
          padding:"0 15px",
          display:"flex"
        }}
      >
        <ViewHeadline fontSize="large" style={{margin:"11px 0", cursor:"pointer"}}
        onClick={()=>setNavShow(!navShow)} />
        <h1 style={{margin:"10px"}}>EAT IN KYOTO</h1>
      </div>
    </>
  );
}

export default Header;
