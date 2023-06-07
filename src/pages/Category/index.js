import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import { ProductsContext } from '../../utils/providers/useProductsProvider';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import './styles.scss';
import ProductListItem from '../../components/CategoryPage/ProductListItem';
import Main from '../../components/Main';

const Category = () => {
  const { currentCategory, setCurrentCategory, allCategories } = useContext(CategoriesContext);
  const { getProductsByCategory, productsByCategory } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();
  const navigate = useNavigate();
  const isValidCategory = allCategories.find((item) => item.type === category);

  useEffect(() => {
    if (!isValidCategory) {
      navigate('/404');
    }
    else {
      setCurrentCategory(category);
    }
  }, [category]);

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
      <Main>
        <div className="category__title">
          <h2 className="category__name">{currentCategory}</h2>
        </div>
        <div className="category__container">
          {
          productsByCategory.map((product) => {
            return (
              <ProductListItem info={product} key={product.id} />
            );
          })
        }
        </div>
        <Categories />
        <StoreDescription />
      </Main>
      <Footer />
    </div>
  );
};

export default Category;
