import React, {useState} from 'react'
import './Home.css'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Corousel from '../Home/Carousel'
import Cards from '../Home/Card'
import Chatbot from '../Chatbot/Chatbot'
import Educard from './Educard/Educard'

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <Header/>
      <Corousel/>
      <Cards/>
      <Educard/>  
      <Footer/>
      <div>
        <button className='btn chatbotButton d-flex justify-content-center align-items-center' onClick={() => setButtonPopup(true)}><img src='assets/img/narada.png' style={{height: '4rem'}}/ ></button>
        <Chatbot trigger={buttonPopup} setTrigger={setButtonPopup}></Chatbot>
      </div>
    </div>
  )
}

export default Home
