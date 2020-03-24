import React, { useState, useEffect } from 'react';
import { ViewHeadline } from '@material-ui/icons';
import { animated, useSpring } from "react-spring"
import SpotData from "./SpotData"
import * as emailjs from "emailjs-com"

interface Props {
  currentSpot: string,
  touring: any
}

const Header: React.FC<Props> = ({ currentSpot, touring }) => {
  const [navShow, setNavShow] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [posted, setPosted] = useState(false)
  
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

  const submit = () =>{
    if(name || description || address){
      let templateParams = {
          from_name: `Eat in Kyoto`,
          to_name: 'Nao',
          subject: 'New Spot was posted',
          message_html: `${name} ${address} ${description}`,
      }
      emailjs.send(
          'gmail',
          'template_E4vRe8bo',
          templateParams,
          'user_DidFMxhza8zx9YgRNBTYS'
      )
      setPosted(true)
    }
  }

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
          {posted?
            <div style = {{ paddingTop:"100px" }}>
              <h1>Thank you!</h1>
              <h3>I will check your post and hopefully add it to the list!</h3>
            </div>
          :
            <div>
              <h3 style={{marginTop:"100px"}}>Tell me your favorite spot!</h3>
              <h4 style={{margin:0, paddingTop:"10px"}}>Spot Name</h4>
              <input onChange={event=>setName(event.target.value)} value={name} />
              <h4 style={{margin:0, paddingTop:"10px"}}>Address / Google Maps Link</h4>
              <input onChange={event=>setAddress(event.target.value)} value={address} />
              <h4 style={{margin:0, paddingTop:"10px"}}>Description (optional)</h4>
              <textarea onChange={event=>setDescription(event.target.value)} value={description} />
              <br/>
              <button onClick={submit}>SEND</button>
            </div>
          }
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
