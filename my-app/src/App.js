import "./App.css";
import Profile from "./PortifolioContainer/Home/Profile";
import NavBarSection from "./PortifolioContainer/Nav_bar";
import AboutUs from "./PortifolioContainer/AboutUs/AboutUs";
import Wwd from "./PortifolioContainer/WhatWeDo/Wwd";
import Wu from "./PortifolioContainer/WhyUs/Wu";

function App() {
  return (
    <div className="App">
      <NavBarSection/>
      <Profile/>
      <AboutUs/>
      <Wwd/>
      <Wu/>
    </div>
  );
};

export default App;
