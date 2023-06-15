import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Product from '../../pages/Product';
import NotFound from '../../pages/NotFound';
import Checkout from '../../pages/Checkout';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:category" element={<Category />} />
    <Route path="/:category/:product" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
