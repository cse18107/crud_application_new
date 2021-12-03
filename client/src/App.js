import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Register from './components/Register';


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Register/>
    </>
  );
}

export default App;
