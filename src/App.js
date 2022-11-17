import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BodyContainer from './components/BodyContainer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BodyContainer />
      <Footer />
    </div>

  );
}

export default App;
