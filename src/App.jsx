import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartContext/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import DetailPage from './pages/detailPage';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
};

export default App;