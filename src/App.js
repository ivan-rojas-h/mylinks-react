import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="main-container">
      <Content />
      <Footer />
    </div>
    </>
  );
}

export default App;
