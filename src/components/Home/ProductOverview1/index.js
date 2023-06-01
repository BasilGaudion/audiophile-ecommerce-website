import './styles.scss';
import speaker from '../../../assets/images/desktop/image-speaker-zx9.png';
import circle from '../../../assets/icons/circle.svg';

const ProductOverview1 = () => {
  return (
    <section className="productoverview1">
      <div className="productoverview1__container container">
        <img className="productoverview1__background" src={circle} alt="" />
        <img className="productoverview1__image" src={speaker} alt="speaker" />
        <h2 className="productoverview1__title">Zx9 Speaker</h2>
        <p className="productoverview1__text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="productoverview1__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview1;
