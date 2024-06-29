import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Products from './Screens/Products/Index';
import { CartProvider } from './Contexts/CartContext/CartContext';

const Routing = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Routing;