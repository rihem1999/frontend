import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Nav/Footer/Footer";
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
      <Nav setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  )
};

export default App;
