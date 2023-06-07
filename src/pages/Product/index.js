import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetailPage/ProductDetail';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

const Product = () => {
  return (
    <div className="home">
      <Header />
      <Main>
        <ProductDetail />
        <Categories />
        <StoreDescription />
      </Main>
      <Footer />
    </div>
  );
};

export default Product;
