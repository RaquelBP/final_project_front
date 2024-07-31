import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import "./App.css";
import Header from './components/Header';
import Cart from './pages/Cart'
//import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import AdminDashboard from './pages/AdminDashboard'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { ProductProvider } from './context/useProductsContext';
import { UserProvider } from './context/UserContext';
import { LoginRoute, ProtectedRoute, AdminRoute } from './routes/RoutesConfig';

function App() {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<LoginRoute />} />
              <Route path="/profile" element={<ProtectedRoute component={<UserProfile />} />} />
              <Route path="/admin/dashboard" element={<AdminRoute component={<AdminDashboard />} />} />
            </Routes>
          </Router>
        </ProductProvider>
      </ShoppingCartProvider>
    </UserProvider>
  );
}

export default App;
