import Header from '../../components/Header';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import './styles.scss';
import ProductListItem from '../../components/CategoryPage/ProductListItem';

const Category = () => {
  return (
    <div className="category">
      <Header />
      <div className="category__title">
        <h2 className="category__name">Headphones</h2>
      </div>
      <ProductListItem />
      <ProductListItem />
      <Categories />
      <StoreDescription />
      <Footer />
    </div>
  );
};

export default Category;
