import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import point from './data/db.json'

function App() {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {point.map(points => (
        <Marker
          key={points.id}
          position={[points.latitude, points.longitude]}>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
