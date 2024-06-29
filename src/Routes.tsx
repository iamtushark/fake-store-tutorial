import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import Products from './Screens/Products/Index';
import CartPage from './Screens/Cart/Index';
import Navbar from './Components/Navbar';
import { CartProvider } from './Contexts/CartContext/CartContext';

// TODO: issue here, solved by gpt by creating another component

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </CartProvider>
  );
};

const Routing = () => {
  const location = useLocation();

  return (
    <>
      <Navbar currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
