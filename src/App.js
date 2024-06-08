import './App.css';
import searchIcon from "./magnifying-glass.svg";
import Carousel from './Components/Carousel'
function App() {
  return (
    <div className="App">
      <div>
        <input type= "text" placeholder="Search for Movies"/>
        <img src={searchIcon} alt='searchIcon'/>
        <Carousel/>
      </div>
    </div>
  );
}

export default App;

