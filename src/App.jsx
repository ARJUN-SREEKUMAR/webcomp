import './App.css'
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from './pages/Home.jsx';


import React from 'react';

function App() {
 
  return (
    < div className=' bg-nutral h-screen overflow-x-hidden'>
      <BrowserRouter >
  
        
        <div className='  relative top-14 md:top-20 pt-1'>
          <Routes >
             <Route path="/" element={<Home/>}/>
     
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
