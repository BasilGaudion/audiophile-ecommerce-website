import './styles.scss';

const ProductListItem = ({ info }) => {
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
          <button
            className="productListItem__button"
            type="button"
          >
            See product
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListItem;
