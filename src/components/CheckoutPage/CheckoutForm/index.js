import './styles.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../../../utils/providers/useCheckoutProvider';
import cashon from '../../../assets/images/checkout/icon-cash-on-delivery.svg';

const CheckoutForm = () => {
  const [isSelected, setIsSelected] = useState(true);

  const { formData, updateFormData } = useContext(CheckoutContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormData(name, value);
  };

  const handleChangeRender = () => {
    setIsSelected(!isSelected);
  };

  return (
    <main className="checkoutForm">
      <p className="checkoutForm__back" onClick={() => navigate(-1)}>Go back</p>
      <div className="checkoutForm__container container">
        <h1 className="checkoutForm__title">Checkout</h1>
        <section className="checkoutForm__billing checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Billing details</h3>

          <div>
            <label htmlFor="name" className={`checkoutForm__label ${formData.errors.name ? 'checkoutForm__label--error' : ''}`}>Name</label>
            {formData.errors.name && <p className="error">Wrong format</p>}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Alexei Ward"
              className={`checkoutForm__input ${formData.errors.name ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div>
            <label htmlFor="email" className={`checkoutForm__label ${formData.errors.email ? 'checkoutForm__label--error' : ''}`}>Email Address</label>
            {formData.errors.email && <p className="error">Wrong format</p>}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="alexei@mail.com"
              className={`checkoutForm__input ${formData.errors.email ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="phone" className={`checkoutForm__label ${formData.errors.phone ? 'checkoutForm__label--error' : ''}`}>Phone Number</label>
            {formData.errors.phone && <p className="error">Wrong format</p>}
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 202-505-0136"
              className={`checkoutForm__input ${formData.errors.phone ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

        </section>
        <section className="checkoutForm__shipping checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Shipping info</h3>
          <div>
            <label htmlFor="address" className={`checkoutForm__label ${formData.errors.address ? 'checkoutForm__label--error' : ''}`}>Your Address</label>
            {formData.errors.address && <p className="error">Wrong format</p>}
            <input
              type="text"
              id="address"
              name="address"
              placeholder="1137 Williams Avenue"
              className={`checkoutForm__input--large ${formData.errors.address ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div>
            <label htmlFor="zip" className={`checkoutForm__label ${formData.errors.zip ? 'checkoutForm__label--error' : ''}`}>Zip Code</label>
            {formData.errors.zip && <p className="error">Wrong format</p>}
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="10001"
              className={`checkoutForm__input ${formData.errors.zip ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.zip}
            />
          </div>
          <div>
            <label htmlFor="city" className={`checkoutForm__label ${formData.errors.city ? 'checkoutForm__label--error' : ''}`}>City</label>
            {formData.errors.city && <p className="error">Wrong format</p>}
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              className={`checkoutForm__input ${formData.errors.city ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.city}
            />
          </div>
          <div>
            <label htmlFor="country" className={`checkoutForm__label ${formData.errors.country ? 'checkoutForm__label--error' : ''}`}>Country</label>
            {formData.errors.country && <p className="error">Wrong format</p>}
            <input
              type="text"
              id="country"
              name="country"
              placeholder="United States"
              className={`checkoutForm__input ${formData.errors.country ? 'checkoutForm__input--error' : ''}`}
              onChange={handleChange}
              value={formData.country}
            />
          </div>

        </section>
        <section className="checkoutForm__payment checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Payment Details</h3>

          <label className="checkoutForm__label">Payment method</label>

          <div className="checkoutForm__radioGroup">
            <div className="checkoutForm__radio" id="radio">
              <input
                type="radio"
                id="e-money"
                name="method"
                value="e-money"
                className="checkoutForm__input--radio"
                defaultChecked
                onChange={handleChangeRender}
              />
              <label htmlFor="e-money" className="checkoutForm__radioLabel">e-Money</label>
            </div>

            <div className="checkoutForm__radio" id="radio">
              <input
                type="radio"
                id="cash-on-delivery"
                name="method"
                className="checkoutForm__input--radio"
                value="cash-on-delivery"
                onChange={handleChangeRender}
              />
              <label htmlFor="cash-on-delivery" className="checkoutForm__radioLabel">Cash on delivery</label>
            </div>
          </div>
          {isSelected ? (
            <>
              <div>
                <label htmlFor="em-num" className={`checkoutForm__label ${formData.errors.emNum ? 'checkoutForm__label--error' : ''}`}>e-money Number</label>
                {formData.errors.emNum && <p className="error">Wrong format</p>}
                <input
                  type="text"
                  id="em-num"
                  name="emNum"
                  placeholder="238521993"
                  className={`checkoutForm__input ${formData.errors.emNum ? 'checkoutForm__input--error' : ''}`}
                  onChange={handleChange}
                  value={formData.emNum}
                />
              </div>
              <div>
                <label htmlFor="em-pin" className={`checkoutForm__label ${formData.errors.emPin ? 'checkoutForm__label--error' : ''}`}>e-money PIN</label>
                {formData.errors.emPin && <p className="error">Wrong format</p>}
                <input
                  type="text"
                  id="em-pin"
                  name="emPin"
                  placeholder="6891"
                  className={`checkoutForm__input ${formData.errors.emPin ? 'checkoutForm__input--error' : ''}`}
                  onChange={handleChange}
                  value={formData.emPin}
                />
              </div>
            </>
          ) : (
            <section className="checkoutForm__cashon">
              <img src={cashon} alt="" className="checkoutForm__cashonIcon" />
              <p className="checkoutForm__cashonText">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </section>
          )}

        </section>
      </div>
    </main>
  );
};

export default CheckoutForm;
