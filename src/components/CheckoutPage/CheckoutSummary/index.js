import './styles.scss';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../../utils/providers/useCheckoutProvider';
import { ModalContext } from '../../../utils/providers/useModalProvider';
import Order from '../../Order';

const CheckoutSummary = () => {
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalVat, setTotalVat] = useState(0);
  const { validateForm, clearForm } = useContext(CheckoutContext);
  const { isVisibleOrder, setIsVisibleOrder } = useContext(ModalContext);

  const cleanName = (str) => {
    return str.replace(/Headphones|Earphones|Speaker|Wireless/gi, '').trim();
  };

  useEffect(() => {
    const storedBasketData = JSON.parse(localStorage.getItem('basket')) || [];
    setBasketData(storedBasketData);
    setLoading(false);
  }, []);

  useEffect(() => {
    setTotal(basketData.reduce((acc, product) => {
      return acc + (product.price * product.quantity);
    }, 0));
  }, [basketData]);

  useEffect(() => {
    setTotalVat(total * (20 / 100));
  }, [total]);

  const handleValidate = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setIsVisibleOrder(true);
      clearForm();
    }
  };

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
                        <h2 className="summary__productTitle">{cleanName(product.name)}</h2>
                        <p className="summary__productPrice">$ {product.price * product.quantity}</p>
                      </div>
                      <div className="summary__quantity">
                        <p>x{product.quantity}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          )}
        <div className="summary__group">
          <div className="summary__priceGroup">
            <p className="summary__total">Total</p>
            <p className="summary__totalPrice">$ {total.toLocaleString('en-US', { minimumFractionDigits: 0 })}</p>
          </div>
          <div className="summary__priceGroup">
            <p className="summary__total">shipping</p>
            <p className="summary__totalPrice">$ 50</p>
          </div>
          <div className="summary__priceGroup">
            <p className="summary__total">Vat (included)</p>
            <p className="summary__totalPrice">$ {totalVat.toLocaleString('en-US', { minimumFractionDigits: 0 })}</p>
          </div>
          <div className="summary__priceGroup">
            <p className="summary__total">Grand Total</p>
            <p className="summary__totalPrice summary__granTotal">$ {(total + 50).toLocaleString('en-US', { minimumFractionDigits: 0 })}</p>
          </div>
        </div>
        <Link to="/checkout">
          <button className="summary__button" type="button" onClick={handleValidate}>Continue & Pay</button>
        </Link>
      </div>
      {/* {isVisibleOrder && <Order />} */}
      <Order />
    </section>
  );
};

export default CheckoutSummary;
