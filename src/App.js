import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import StarShipList from './components/StarShipList/StarShipList';
import ShipDetails from './pages/ShipDetails/ShipDetails';


function App() {
  return (
    <>
      <nav>Star Wars StarShips</nav>
      <Routes>
        <Route path='/' element={<StarShipList />} />
        <Route path='/ships' element={<ShipDetails />} />
      </Routes>
    </>
  );
}

export default App;
