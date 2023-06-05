import './styles.scss';
import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../../utils/providers/useProductsProvider';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const {
    currentProductData, setCurrentProductData, setCurrentProduct, getCurrentProduct,
  } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [lines, setLines] = useState([]);
  const { product } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentProduct(product);
    const productData = getCurrentProduct(product);
    setCurrentProductData(productData);
  }, [product]);

  useEffect(() => {
    if (currentProductData && currentProductData.features) {
      setIsLoading(false);
      setLines(currentProductData.features.split('\n'));
    }
  }, [currentProductData]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = (slug) => {
    const newProduct = getCurrentProduct(slug);
    navigate(`/${newProduct.category}/${newProduct.slug}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <main className="product">
      <div className="product__container container">
        <button
          className="product__back"
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <div className="product__primary">
          <picture>
            <source srcSet={currentProductData.image.mobile} media="(max-width: 767px)" />
            <source srcSet={currentProductData.image.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
            <source srcSet={currentProductData.image.desktop} media="(min-width: 1024px)" />
            <img className="product__image" src={currentProductData.image.mobile} alt="product headphones" />
          </picture>
          <section className="product__content">
            {currentProductData.new && <h3 className="productListItem__subtitle">New product</h3>}
            <h1 className="product__title">{currentProductData.name}</h1>
            <p className="product__text">{currentProductData.description}</p>
            <div className="product__price">$ {currentProductData.price}</div>
            <div className="product__basketDetails">
              <form onSubmit={handleSubmit}>
                <button onClick={decreaseQuantity} className="product__button--setvalue" type="button">-</button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
                <button onClick={increaseQuantity} className="product__button--setvalue" type="button">+</button>
                <button type="submit" className="product__button">Add to cart</button>
              </form>
            </div>
          </section>
        </div>
        <section className="product__featuresBox">
          <section className="product__features">
            <h2 className="product__secondaryTitle">Features</h2>
            {lines.map((line, index) => (
              <p className="product__text" key={index}>
                {line}
              </p>
            ))}
          </section>
          <section className="product__box">
            <h2 className="product__secondaryTitle">In the box</h2>
            <ul className="product__list">
              {currentProductData.includes.map((object, index) => (
                <li key={index}><span>{object.quantity}x</span>{object.item}</li>
              ))}
            </ul>
          </section>
        </section>
        <section className="product__gallery">
          <div className="product__imageGroup">
            <div className="product__galleryImage">
              <picture>
                <source srcSet={currentProductData.gallery.first.mobile} media="(max-width: 767px)" />
                <source srcSet={currentProductData.gallery.first.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
                <source srcSet={currentProductData.gallery.first.desktop} media="(min-width: 1024px)" />
                <img className="product__image" src={currentProductData.gallery.first.mobile} alt="product headphones" />
              </picture>
            </div>
            <div className="product__galleryImage">
              <picture>
                <source srcSet={currentProductData.gallery.second.mobile} media="(max-width: 767px)" />
                <source srcSet={currentProductData.gallery.second.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
                <source srcSet={currentProductData.gallery.second.desktop} media="(min-width: 1024px)" />
                <img className="product__image" src={currentProductData.gallery.second.mobile} alt="product headphones" />
              </picture>
            </div>
          </div>
          <div className="product__galleryImage--big">
            <picture>
              <source srcSet={currentProductData.gallery.third.mobile} media="(max-width: 767px)" />
              <source srcSet={currentProductData.gallery.third.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
              <source srcSet={currentProductData.gallery.third.desktop} media="(min-width: 1024px)" />
              <img className="product__image" src={currentProductData.gallery.third.mobile} alt="product headphones" />
            </picture>
          </div>
        </section>
        <section className="product__others">
          <h2 className="product__secondaryTitle">You may also like</h2>
          <div className="product__othersProducts">
            {currentProductData.others.map((object) => (
              <div className="product__othersProduct" key={object.slug}>
                <div className="product__othersImage">
                  <picture>
                    <source srcSet={object.image.mobile} media="(max-width: 767px)" />
                    <source srcSet={object.image.tablet} media="(min-width: 768px) and (max-width: 1440px)" />
                    <source srcSet={object.image.desktop} media="(min-width: 1024px)" />
                    <img className="product__image" src={object.image.mobile} alt="product headphones" />
                  </picture>
                </div>
                <h2 className="product__secondaryTitle">{object.name}</h2>
                <button
                  className="productListItem__button"
                  type="button"
                  onClick={() => handleClick(object.slug)}
                >
                  See product
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );

};

export default ProductDetail;
