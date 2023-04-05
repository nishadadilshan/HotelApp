import './App.css';
import Home from './Components/Screens/Home';
import BackgroundImage from './Assests/BackGround.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundColor: 'red', height: '100vh' }} >
      <Home />
    </div>
  );
}

export default App;
