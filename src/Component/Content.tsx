import React from 'react';

interface Props {
  name: string,
  description: string
}

const Content: React.FC<Props> = ({name, description}) => {
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
      padding:"0 20px"
    }}>
      <div className="spot-card">
        <h1>{name}</h1>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default Content;
