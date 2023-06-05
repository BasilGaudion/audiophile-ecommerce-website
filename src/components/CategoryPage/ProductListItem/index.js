import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const ProductListItem = ({ info }) => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="productListItem">
      <div className="productListItem__container container">
        <picture>
          <source srcSet={info.categoryImage.mobile} media="(max-width: 767px)" />
          <source srcSet={info.categoryImage.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
          <source srcSet={info.categoryImage.desktop} media="(min-width: 1024px)" />
          <img className="productListItem__image" src={info.categoryImage.mobile} alt={info.name} />
        </picture>

        <div className="productListItem__content">
          {info.new && <h3 className="productListItem__subtitle">New product</h3>}
          <h2 className="productListItem__title">{info.name}</h2>
          <p className="productListItem__text">{info.description}</p>
          <Link
            key={info.id}
            to={`/${info.category}/${info.slug}`}
          >
            <button
              className="productListItem__button"
              type="button"
              onClick={() => handleClick()}
            >
              See product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

ProductListItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    categoryImage: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
    }).isRequired,
    new: PropTypes.bool,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductListItem;
