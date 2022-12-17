import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MainNavbar from '../components/MainNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPoint } from '../store/actionCreator/pointAction';

function DarkMap() {
  const { point } = useSelector(state => state.pointReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoint())
  }, [])

  return (
    <>
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
              {points.name} <br /> Longitude: {points.latitude} Latitude: {points.longitude}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default DarkMap;
