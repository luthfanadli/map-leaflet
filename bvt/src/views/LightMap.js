import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MainNavbar from '../components/MainNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPoint } from '../store/actionCreator/pointAction';

function LightMap() {
  const { point } = useSelector(state => state.pointReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPoint())
  }, [])
  
  return (
    <div>
      <MainNavbar />
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
              {points.name} <br /> Longitude: {points.latitude} Latitude: {points.longitude}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default LightMap;
