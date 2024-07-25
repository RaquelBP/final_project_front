/*
import './App.css'
import MyFormChallenge from "./components/MyFormChallenge.jsx"

function App() {
  return (
    <>
      <MyFormChallenge />
    </>
  )
}

export default App
*/


import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import "./App.css";
import Auth from './components/Auth';
//import Navigation from './components/Navigation';
import Header from './components/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Cart from './pages/Cart';

function App() {
 return (
  <>
    <ShoppingCartProvider>
    
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


    </ShoppingCartProvider>
</>
 )
}

export default App;


/*

<>
  <ShoppingCartProvider>
      <Navigation/>
      <Header />
      <Auth/>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />}/>
          <Route path="/order/:id/ticket" element={<ProductList />}/>
          <Route path="/login" element={<ProductList />}/>
          <Route path="/admin/dashboard" element={<ProductList />}/>

          <Route path="/:oldSearch" element={<ProductList />}/>
          <Route path="/product/:id" element={<ProductDetail />}/>
          <Route path="/product/:id/:oldSearch" element={<ProductDetail />}/>
        </Routes>
      </Router>
    </ShoppingCartProvider>
  </>

*/