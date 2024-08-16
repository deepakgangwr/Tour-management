import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './../Pages/Home';
import About from './../Pages/About';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList.jsx';
import ThankYou from '../Pages/ThankYou';



const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchResultList />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/TourDetails" element={<TourDetails/>} />
    </Routes>
  )
}

export default Routers