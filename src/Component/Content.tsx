import React, { useState, useEffect } from 'react';
import { Pause, DoubleArrow, PlayArrow } from '@material-ui/icons';

interface Props {
  spot:{
    name: string,
    description: string,
    location: { lat: number, lng: number },
    url: string,
    key: number
  },
  pause: () => void,
  next: () => void
}


const Content: React.FC<Props> = ({ spot, pause, next }) => {
  const [pausing, setPausing] = useState(false)

  useEffect(()=>{
    setPausing(false)
  },[spot])

  return (
    <div style={{
      position:"fixed",
      bottom: 0,
      left:0,
      height:300,
      maxHeight: "35vh",
      width: "100%",
      boxShadow:"0 0 20px rgba(0,0,0,0.6)",
      backgroundColor:"white",
      fontFamily: "Bellota Text",
      overflow:"auto"
    }}>
      <div className="spot-card">
        <div style={{padding:"15px"}}>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          <div style={{maxWidth:"700px", padding:"0 10px"}}>
          <h1 style={{margin:0}}>{spot.name}</h1>
          <a
              href={spot.url}
              target="blank"
              style={{paddingLeft:"5px"}}
            >
              See on Google Maps
            </a>

            <div style={{display:"flex", flexWrap:"wrap"}}>
              <button
                onClick={()=>{
                  pause()
                  setPausing(!pausing)
                }}
                style={pausing?{margin:"10px",backgroundColor:"rgb(200,200,200)",color:"black"}:{margin:"10px"}}
              >
                {pausing?
                  <PlayArrow/>
                :
                  <Pause />
                }
              </button>
              <button onClick={next} style={{margin:"10px"}}><DoubleArrow /></button>
            </div>
            <h3>{spot.description}</h3>
            </div>
            <div style={{maxWidth:"700px", padding:"15px"}}>
            <img
              alt="food"
              style={{maxWidth:"300px", minWidth:"280px", borderRadius:"10%", marginLeft:"auto", width:"100%"}}
              src={`/images/pic${spot.key}.jpg`}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
