import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Product from '../../pages/Product';
import NotFound from '../../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:category" element={<Category />} />
    <Route path="/product" element={<Product />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
