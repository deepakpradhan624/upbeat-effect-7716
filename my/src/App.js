
import './App.css';
import AllRoutes from './Components/Routes/AllRoutes';
// import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
   {/* <Home /> */}
   <Navbar />
   <AllRoutes />
   <Footer />
    </div>
  );
}

export default App;
