import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Categories/>
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
