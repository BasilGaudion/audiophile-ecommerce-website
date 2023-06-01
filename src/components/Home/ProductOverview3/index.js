import './styles.scss';
import earphonesProduct from '../../../assets/images/home/mobile/image-earphones-yx1.jpg';

const ProductOverview3 = () => {
  return (
    <section className="productoverview3">
      <div className="productoverview3__container container">
        <img className="productoverview3__image" src={earphonesProduct} alt="speaker" />
      </div>
      <div className="productoverview3__container container">
        <h2 className="productoverview3__title">yx1 earphones</h2>
        <button className="productoverview3__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview3;
