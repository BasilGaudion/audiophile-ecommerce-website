import './styles.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSummary = () => {
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const storedBasketData = JSON.parse(localStorage.getItem('basket')) || [];
    setBasketData(storedBasketData);
    setLoading(false);
  }, []);

  const total = basketData.reduce((acc, product) => {
    return acc + (product.price * quantity[product.id]);
  }, 0);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="summary">
      <div className="summary__container container">
        <div className="summary__header">
          <h3 className="summary__title">Summary</h3>
        </div>
        {basketData.length === 0
          ? (
            <div className="summary__content">
              <p className="summary__empty">Your basket is empty</p>
            </div>
          )
          : (
            <ul className="summary__list">
              {
                basketData.map((product) => {
                  return (
                    <li className="summary__item" key={product.id}>
                      <div className="summary__image">
                        <img className="summary__imageItem" src={product.image} alt="" />
                      </div>
                      <div className="summary__groupItem">
                        <h2 className="summary__productTitle">{product.name}</h2>
                        <p className="summary__productPrice">$ {product.price * product.quantity}</p>
                      </div>
                      <div className="summary__quantity">
                        <p>{product.quantity}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          )}
        <div className="summary__priceGroup">
          <p className="summary__total">Total</p>
          <p className="summary__totalPrice">$ {total}</p>
          {console.log('🚀 ~ file: index.js:60 ~ CheckoutSummary ~ total:', total)}
        </div>
        <div className="summary__priceGroup">
          <p className="summary__total">shipping</p>
          <p className="summary__totalPrice">$ 50</p>
        </div>
        <div className="summary__priceGroup">
          <p className="summary__total">Vat (included)</p>
          <p className="summary__totalPrice">$ 1,079</p>
        </div>
        <div className="summary__priceGroup">
          <p className="summary__total">Grand Total</p>
          <p className="summary__totalPrice">$ 1,079</p>
        </div>
        <Link to="/checkout">
          <button className="summary__button" type="button">Checkout</button>
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSummary;