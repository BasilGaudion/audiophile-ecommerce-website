import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Category from '../../pages/Category';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:category" element={<Category />} />
    {/* <Route path="/local-market/:store/:product" element={<Product />} /> */}
  </Routes>
);

export default AppRoutes;
