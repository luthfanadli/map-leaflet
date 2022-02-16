import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import point from '../data/db.json'
import MainNavbar from '../components/MainNavbar';

function LightMap() {

  return (
    <div>
    <MainNavbar/>
    <MapContainer center={[-2.994494, 120.195465]} zoom={5} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {point.map(points => (
        <Marker
          key={points.id}
          position={[points.latitude, points.longitude]}>
        <Popup>
       {points.name} <br /> 
      </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}

export default LightMap;
