import './App.css';
import GranCard from './components/GranCard';
import MiNavbar from './components/MiNavBar';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <MiNavbar />
      <div className="container">
        <div className="row">
          <div className="col-12"><GranCard /></div>
        </div>
        <div className="row">
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
          <div className="col-md-4"><Card /></div>
        </div>
      </div>
      <Footer />
    </>
   

  )
};