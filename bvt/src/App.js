import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMap from './views/DarkMap';
import LightMap from './views/LightMap';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route
          path="/"
          element={
            <LightMap />
          }
        />
        <Route
          path="/dark"
          element={
            <DarkMap />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
