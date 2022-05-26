import './App.css';
import React from 'react';
import Main from './Main';
import Page from './page';
import { useEffect, useState } from 'react';


const API_URL = "http://www.omdbapi.com?apikey=21c03aff";
// const Search = async(title) =>{
//   const response = await fetch(`${API_URL}&s=${title}`);
//   const data = await response.json();

//   console.log(data);
// };



function App() {

  return (
    <>
      <Main />
    </>
  );
}

export default App;
