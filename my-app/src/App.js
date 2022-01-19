import "./App.css";
import Profile from "./PortifolioContainer/Home/Profile";
import NavBarSection from "./PortifolioContainer/Nav_bar";
import AboutUs from "./PortifolioContainer/AboutUs/AboutUs";
import Wwd from "./PortifolioContainer/WhatWeDo/Wwd";
import Wu from "./PortifolioContainer/WhyUs/Wu";
import Price from "./PortifolioContainer/Price/Price";

function App() {
  return (
    <div className="App">
      <NavBarSection/>
      <Profile/>
      <AboutUs/>
      <Wwd/>
      <Wu/>
      <Price/>

    </div>
  );
};

export default App;
