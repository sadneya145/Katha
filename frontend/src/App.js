import React from 'react';
import { useState } from 'react';
import Map from './Components/Map/Map';
import Home from './Components/Home/Home'
import Marketplace from './Components/Marketplace/Marketplace';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup'
import ProductDetails from './Components/Marketplace/ProductDetails/ProductDetails';
import BeautyProducts from './Components/Marketplace/Beautyproducts/BeautyProduct';
import Handicrafts from './Components/Marketplace/Handicrafts/Handicrafts';
import HandwovenTextiles from './Components/Marketplace/Handwoven/Handwoven';
import Jwellery from './Components/Marketplace/Jwellery/Jwellery';
import Paintings from './Components/Marketplace/Paintaings/Paintings';
import Spices from './Components/Marketplace/Spices/Spices'
import Festival from './Components/Marketplace/Festival/Festival';
import Pooja from './Components/Marketplace/Pooja/Pooja';
import UttarakhandInfo from './Info/Uttarakhand';
import MaharashtraInfo from './Info/MaharshtraInfo';
import { Box } from '@mui/material';
import Calendar from './Components/Calendar/Calendar';
// import Wording from "../src/Components/Wotd/WordApp";
import SubBoxes from './Components/SubBox/SubBoxes'
import Workshop from './Components/Workshop/Workshop';
import Quiz from './Components/Quiz/Quiz'
import InputBox from './Components/WOTD/Wotd';
import { useLocation } from 'react-router-dom';


function App() {
  const [openWordPopup, setOpenWordPopup] = useState(true);

  const handleClosePopup = () => {
    setOpenWordPopup(false);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/marketplace/handwoven" element={<HandwovenTextiles/>} />
        <Route path="/marketplace/handicrafts" element={<Handicrafts />} />
        <Route path="/marketplace/jewellery" element={<Jwellery/>} />
        <Route path="/marketplace/paintings" element={<Paintings/>} />
        <Route path="/marketplace/beautyproducts" element={<BeautyProducts/>} />
        <Route path="/marketplace/spices"element={<Spices/>}/>
        <Route path="/marketplace/pooja" element={<Pooja/>} />
        <Route path="/marketplace/decor" element={<Festival/>} />
        <Route path="/uttarakhand" element={<UttarakhandInfo/>} />
        <Route path="/maharashtra" element={<MaharashtraInfo/>  } />
        {/* <Route path='/wotd' element={<Word/>} /> */}
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/quiz' element={<Quiz/>}/>
        {/* <Route path='/word' element={<Wording/>}/> */}
        <Route path='/subboxes' element={<SubBoxes />} />
        <Route path='/workshop' element={<Workshop />} />
    </Routes>
    </BrowserRouter>
    <InputBox open={openWordPopup} onClose={handleClosePopup} />
    </div>
  );
}

export default App;