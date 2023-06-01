import './styles.scss';
import headphones from '../../assets/images/categories/mobile/category-headphones.png';
import speakers from '../../assets/images/categories/mobile/category-speaker.png';
import earphones from '../../assets/images/categories/mobile/category-earphones.png';
import arrow from '../../assets/icons/arrow-right.svg';

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__container container">
        <div className="categories__section">
          <img className="categories__image" src={headphones} alt="headphones category" />
          <h2 className="categories__title">Headphones</h2>
          <div className="categories__link">
            <p className="categories__text">
              Shop
              <img src={arrow} alt="" />
            </p>
          </div>

        </div>
        <div className="categories__section">
          <img className="categories__image" src={speakers} alt="headphones category" />
          <h2 className="categories__title">Speakers</h2>
          <div className="categories__link">
            <p className="categories__text">
              Shop
              <img src={arrow} alt="" />
            </p>
          </div>

        </div>
        <div className="categories__section">
          <img className="categories__image" src={earphones} alt="headphones category" />
          <h2 className="categories__title">Earphones</h2>
          <div className="categories__link">
            <p className="categories__text">
              Shop
              <img src={arrow} alt="" />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;
