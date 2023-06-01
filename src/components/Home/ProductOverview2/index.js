import './styles.scss';
import speakerTable from '../../../assets/images/home/mobile/image-speaker-zx7.jpg';

const ProductOverview2 = () => {
  return (
    <section className="productoverview2">
      <div className="productoverview2__container container">
        <img className="productoverview2__image" src={speakerTable} alt="speaker" />
        <h2 className="productoverview2__title">Zx7 Speaker</h2>
        <button className="productoverview2__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview2;
