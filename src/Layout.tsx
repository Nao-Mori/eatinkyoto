import React from 'react';
import Header from "./Component/Header"
import Map from "./Component/Map"
import Content from "./Component/Content"

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Map
        googleMapURL={'https://www.google.com/maps/@35.7203348,139.7613282,13.75z'}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
      <Content title="" description="" />
    </>
  );
}

export default Layout;
