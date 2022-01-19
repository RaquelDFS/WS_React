import "./App.css";
import Profile from "./PortifolioContainer/Home/Profile";
import NavBarSection from "./PortifolioContainer/Nav_bar";
import AboutUs from "./PortifolioContainer/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBarSection/>
      <Profile/>
      <AboutUs/>
    </div>
  );
};

export default App;
