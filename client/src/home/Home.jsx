import React from 'react';
import './home.scss';
import Navbar from '../components/navbar/Navbar.jsx';
import Featured from '../components/featured/Featured';
import List from '../components/list/List';

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Featured type="movie"/>
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
        <List /> 
    </div>
    
    
  );
}

export default Home