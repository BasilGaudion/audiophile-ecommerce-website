import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import confirmOrder from '../../assets/images/checkout/icon-order-confirmation.svg';
import { ModalContext } from '../../utils/providers/useModalProvider';
import { CheckoutContext } from '../../utils/providers/useCheckoutProvider';

const Order = () => {
  const { handleIsVisibleOrder } = useContext(ModalContext);
  const { order } = useContext(CheckoutContext);
  const [total, setTotal] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const cleanName = (str) => {
    return str.replace(/Headphones|Earphones|Speaker|Wireless/gi, '').trim();
  };

  useEffect(() => {
    setTotal(order.reduce((acc, product) => {
      return acc + (product.price * product.quantity);
    }, 0));
  }, []);

  return (
    <section className="order">
      <div className="order__container container">
        <div className="order__header">
          <img className="order__icon" src={confirmOrder} alt="" />
          <h2 className="order__title">Thank you <br />for your order</h2>
          <p className="order__text">You will receive an email confirmation shortly</p>
        </div>
        <div className="order__group">
          <div className="order__preview">
            <div className="order__item">
              <img className="order__image" src={order[0].image} alt="" />
              <div className="order__groupItem">
                <h2 className="order__productTitle">{cleanName(order[0].name)}</h2>
                <p className="order__productPrice">$ 2,299</p>
              </div>
              <p className="order__quantity">x{order[0].quantity}</p>
            </div>
            <p className="order__otherItems">and {order.length - 1} other item(s)</p>
          </div>
          <div className="order__total">
            <h4 className="order__totalTitle">Grand Total</h4>
            <p className="order__totalPrice">$ {total}</p>
          </div>
        </div>
        <Link to="/" onClick={scrollToTop}>
          <button className="order__button" type="button" onClick={handleIsVisibleOrder}>Back to home</button>
        </Link>
      </div>
    </section>
  );
};

export default Order;
