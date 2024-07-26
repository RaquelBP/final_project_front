import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import "./App.css";
//import Auth from './components/Auth';
//import Navigation from './components/Navigation';
import Header from './components/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { ProductProvider } from './context/useProductsContext';
import Cart from './pages/Cart';

function App() {
 return (
  <>
    <ShoppingCartProvider>
    <ProductProvider>
    
    <Router>
      <Header />
      {/*<Auth/>*/}
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/:oldSearch" element={<ProductList />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/product/:id/:oldSearch" element={<ProductDetail />}/>
      </Routes>
    </Router>


    </ProductProvider>
    </ShoppingCartProvider>
</>
 )
}

export default App;
