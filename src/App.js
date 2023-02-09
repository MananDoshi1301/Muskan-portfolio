// import logo from './logo.svg';
import './App.scss';
import cx from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from './components/common/Navbar/WebNavbar';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
// import ReactPageScroller from 'react-page-scroller';


function App() {
  return (
    <div className="App">
      <WebNavbar />
      <div className={cx('ps-5')}>
        <Banner />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
