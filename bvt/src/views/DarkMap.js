import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import point from '../data/db.json'
import MainNavbar from '../components/MainNavbar';

function DarkMap() {

  return (
    <div>
    <MainNavbar/>
    <MapContainer center={[-2.994494, 120.195465]} zoom={5} >
      <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
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

export default DarkMap;
