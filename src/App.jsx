import React, { useState } from 'react';
import {allData} from "./assets/data";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  const [RenderData, setRenderData] = useState([])
  function getData(data){
    setRenderData(data);
  }

  return (
    <div className="bg-gray-700 min-h-[100vh]">
      <Navbar func={getData} />
      <Home/>
      <Card data={RenderData} />
    </div>
  )
}

export default App;
