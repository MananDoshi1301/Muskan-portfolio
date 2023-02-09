// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from './components/common/Navbar/WebNavbar';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <WebNavbar />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
