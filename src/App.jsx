import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartContext/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};

export default App;