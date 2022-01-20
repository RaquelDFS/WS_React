import "./App.css";
import Profile from "./PortifolioContainer/Home/Profile";
import NavBarSection from "./PortifolioContainer/Nav_bar";
import AboutUs from "./PortifolioContainer/AboutUs/AboutUs";
import Wwd from "./PortifolioContainer/WhatWeDo/Wwd";
import Wu from "./PortifolioContainer/WhyUs/Wu";
import Price from "./PortifolioContainer/Price/Price";
import Testimonial from "./PortifolioContainer/Testimonial/Testimonial";
import Clients from "./PortifolioContainer/Clients/Clients";
import ContactMe from "./PortifolioContainer/ContactMe/ContactMe";
import Footer from "./PortifolioContainer/Footer/Footer"

function App() {
  return (
    <div className="App">
      <NavBarSection/>
      <Profile/>
      <AboutUs/>
      <Wwd/>
      <Wu/>
      <Price/>
      <Testimonial/>
      <Clients/>
      <ContactMe/>
      <Footer/>
    </div>
  );
};

export default App;
