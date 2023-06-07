import './styles.scss';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import basketImg from '../../assets/images/cart/image-xx99-mark-two-headphones.jpg';

const Basket = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // MAKE A TERNAIRE TO DISPLAY A MESSAGE "YOUR BASKET IS EMPTY" IF THE STORAGE LOCAL IS EMPTY
  return (
    <section className="basket">
      <div className="basket__container container">
        <div className="basket__header">
          <h3 className="basket__title">Cart (3)</h3>
          <p className="basket__remove">Remove all</p>
        </div>
        {/* <div className="basket__content">
          <p className='basket__empty'>Your basket is empty</p>
        </div> */}
        <ul className="basket__list">
          <li className="basket__item">
            <div className="basket__image">
              <img className="basket__imageItem" src={basketImg} alt="" />
            </div>
            <div className="basket__groupItem">
              <h2 className="basket__productTitle">Xx99 mk ii</h2>
              <p className="basket__productPrice">$ 2,999</p>
            </div>
            <div className="basket__quantity">
              <button onClick={decreaseQuantity} className="basket__button--setvalue" type="button">-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
              <button onClick={increaseQuantity} className="basket__button--setvalue" type="button">+</button>
            </div>
          </li>
        </ul>
        <div className="basket__priceGroup">
          <p className="basket__total">Total</p>
          <p className="basket__totalPrice">$ 5,396</p>
        </div>
        <button className="basket__button" type="button">Checkout</button>
      </div>
    </section>
  );
};

export default Basket;
