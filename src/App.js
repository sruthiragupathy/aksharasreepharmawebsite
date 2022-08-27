import "./styles.css";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactUsPage from './pages/ContactUsPage';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
