import './styles.scss';
import headphonesMobil from '../../../assets/images/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import headphonesTablet from '../../../assets/images/product-xx59-headphones/tablet/image-category-page-preview.jpg';
import headphonesDesktop from '../../../assets/images/product-xx59-headphones/desktop/image-category-page-preview.jpg';

const ProductListItem = () => {
  return (
    <section className="productListItem">
      <div className="productListItem__container container">
        <picture>
          <source srcSet={headphonesMobil} media="(max-width: 767px)" />
          <source srcSet={headphonesTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          <source srcSet={headphonesDesktop} media="(min-width: 1024px)" />
          <img className="productListItem__image" src={headphonesMobil} alt="" />
        </picture>
        <div className="productListItem__content">
          <h3 className="productListItem__subtitle">New product</h3>
          <h2 className="productListItem__title">Xx99 mark ii headphones</h2>
          <p className="productListItem__text">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button className="productListItem__button" type="button">See product</button>
        </div>
      </div>
    </section>
  );
};

export default ProductListItem;
