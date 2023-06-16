import './styles.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ModalContext } from '../../utils/providers/useModalProvider';
import { BasketContext } from '../../utils/providers/useBasketProvider';

const Basket = () => {
  const [basketData, setBasketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState({});
  const { handleIsVisible } = useContext(ModalContext);
  const { setHasProduct } = useContext(BasketContext);

  const cleanName = (str) => {
    return str.replace(/Headphones|Earphones|Speaker|Wireless/gi, '').trim();
  };

  useEffect(() => {
    const storedBasketData = JSON.parse(localStorage.getItem('basket')) || [];

    // This line creates a newQuantity object from the retrieved basket data. The newQuantity object will have key-value pairs where the key is the product ID and the value is the quantity of that product. The reduce method is used to transform the product array into a quantity object.
    const newQuantity = storedBasketData.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, {});

    setBasketData(storedBasketData);
    setQuantity(newQuantity);
    setLoading(false);
  }, []);

  const updateQuantityInLocalStorage = (productId, newQuantity) => {
    let updatedBasketData = [...basketData];
    updatedBasketData = updatedBasketData.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    localStorage.setItem('basket', JSON.stringify(updatedBasketData));
    setBasketData(updatedBasketData);
    setQuantity((prevQuantity) => ({ ...prevQuantity, [productId]: newQuantity }));
  };

  const decreaseQuantity = (productId) => {
    const productToUpdate = basketData.find((item) => item.id === productId);
    if (productToUpdate && productToUpdate.quantity > 1) {
      const newQuantity = productToUpdate.quantity - 1;
      updateQuantityInLocalStorage(productId, newQuantity);
    }
    else {
      const updatedBasketData = basketData.filter((product) => product.id !== productId);
      localStorage.setItem('basket', JSON.stringify(updatedBasketData));
      setBasketData(updatedBasketData);

      const basketExist = JSON.parse(localStorage.getItem('basket'));

      if (!basketExist || basketExist.length === 0) {
        setHasProduct(false);
      }
    }
  };

  const handleDeleteBasket = () => {
    localStorage.removeItem('basket');
    setHasProduct(false);
    setBasketData([]);
  };

  const increaseQuantity = (productId) => {
    const productToUpdate = basketData.find((item) => item.id === productId);
    if (productToUpdate) {
      const newQuantity = productToUpdate.quantity + 1;
      updateQuantityInLocalStorage(productId, newQuantity);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const total = basketData.reduce((acc, product) => {
    return acc + (product.price * quantity[product.id]);
  }, 0);

  return (
    <section className="basket">
      <div className="basket__container container">
        <div className="basket__header">
          <h3 className="basket__title">Cart ({basketData.length})</h3>
          <p className="basket__remove" onClick={handleDeleteBasket}>Remove all</p>
        </div>
        {basketData.length === 0
          ? (
            <div className="basket__content">
              <p className="basket__empty">Your basket is empty</p>
            </div>
          )
          : (
            <ul className="basket__list">
              {
                basketData.map((product) => {
                  return (
                    <li className="basket__item" key={product.id}>
                      <div className="basket__image">
                        <img className="basket__imageItem" src={product.image} alt="" />
                      </div>
                      <div className="basket__groupItem">
                        <h2 className="basket__productTitle">{cleanName(product.name)}</h2>
                        <p className="basket__productPrice">$ {product.price * product.quantity}</p>
                      </div>
                      <div className="basket__quantity">
                        <button onClick={() => decreaseQuantity(product.id)} className="basket__button--setvalue" type="button">-</button>
                        <input
                          type="number"
                          min="1"
                          value={quantity[product.id] || ''}
                          onChange={(event) => updateQuantityInLocalStorage(product.id, Number(event.target.value))}
                          className="basket__inputQuantity"
                        />
                        <button onClick={() => increaseQuantity(product.id)} className="basket__button--setvalue" type="button">+</button>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          )}
        <div className="basket__priceGroup">
          <p className="basket__total">Total</p>
          <p className="basket__totalPrice">$ {total.toFixed(2)}</p>
        </div>
        <Link to="/checkout">
          <button className="basket__button" type="button" onClick={handleIsVisible}>Checkout</button>
        </Link>
      </div>
    </section>
  );
};

export default Basket;
