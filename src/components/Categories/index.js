import './styles.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import headphones from '../../assets/images/categories/mobile/category-headphones.png';
import speakers from '../../assets/images/categories/mobile/category-speaker.png';
import earphones from '../../assets/images/categories/mobile/category-earphones.png';
import arrow from '../../assets/icons/arrow-right.svg';
import { CategoriesContext } from '../../utils/providers/useCategoriesProvider';

const categoryImages = {
  headphones,
  speakers,
  earphones,
};

const Categories = () => {
  const { allCategories, setCurrentCategory } = useContext(CategoriesContext);

  const handleClick = (category) => {
    setCurrentCategory(category);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="categories">
      <div className="categories__container container">
        {
          allCategories.map((item) => {
            const categoryImage = categoryImages[item.type];
            return (
              <Link to={`/${item.type}`} key={item.type}>
                <div className="categories__section">
                  <img className="categories__image" src={categoryImage} alt="headphones category" />
                  <h2 className="categories__title">{item.name}</h2>
                  <div className="categories__link">
                    <p className="categories__text" onClick={() => handleClick(item.type)}>
                      Shop
                      <img src={arrow} alt="" />
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        }
      </div>
    </section>
  );
};
export default Categories;
