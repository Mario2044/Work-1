import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home/home';

const ShopRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/*<Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<Contact />} />
          <Route path="category" element={<Categories />} />
          <Route path="bucket" element={<Categories />} />
          <Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ShopRouters;