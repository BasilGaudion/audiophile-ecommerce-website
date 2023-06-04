import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetailPage/ProductDetail';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';

const Product = () => {
  return (
    <div className="home">
      <Header />
      <ProductDetail />
      <Categories />
      <StoreDescription />
      <Footer />
    </div>
  );
};

export default Product;
