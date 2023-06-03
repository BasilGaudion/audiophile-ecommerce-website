import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import { ProductsContext } from '../../utils/providers/useProductsProvider';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import './styles.scss';
import ProductListItem from '../../components/CategoryPage/ProductListItem';

const Category = () => {
  const { currentCategory } = useContext(CategoriesContext);
  const { getProductsByCategory, productsByCategory } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    setIsLoading(false);
  }, [productsByCategory]);

  if (isLoading) {
    return (
      <div>isLoading</div>
    );
  }

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
