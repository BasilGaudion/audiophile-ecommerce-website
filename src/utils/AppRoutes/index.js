import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/local-market/:store/:product" element={<Product />} /> */}
  </Routes>
);

export default AppRoutes;
