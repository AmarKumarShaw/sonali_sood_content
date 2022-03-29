import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import InnerLayout from './InnerLayout/InnerLayout';
import Footer from './Footer/Footer';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade>
        <Navbar />
      </Fade>
      <LandingPage />
      
      <InnerLayout />
      <Footer />      
    </div>
  );
}

export default App;
