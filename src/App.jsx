import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductView from "./components/ProductView";
function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="productview/" element={<ProductView/>}/>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
