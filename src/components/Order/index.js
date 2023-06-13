import './styles.scss';
import confirmOrder from '../../assets/images/checkout/icon-order-confirmation.svg';
import imageProduct from '../../assets/images/cart/image-yx1-earphones.jpg';

const Order = () => {
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
              <img className="order__image" src={imageProduct} alt="" />
              <div className="order__groupItem">
                <h2 className="order__productTitle">XX99 MK II</h2>
                <p className="order__productPrice">$ 2,299</p>
              </div>
              <p className="order__quantity">x1</p>
            </div>
            <p className="order__otherItems">and x other item(s)</p>
          </div>
          <div className="order__total">
            <h4 className="order__totalTitle">Gand Total</h4>
            <p className="order__totalPrice">$ 5,446</p>
          </div>
        </div>
        <button className="order__button" type="button">Back to home</button>
      </div>
    </section>
  );
};

export default Order;
