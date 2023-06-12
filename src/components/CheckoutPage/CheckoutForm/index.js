import './styles.scss';

const CheckoutForm = () => {
  return (
    <main className="checkoutForm">
      <p className="checkoutForm__back" type="button">Go back</p>
      <div className="checkoutForm__container container">
        <h1 className="checkoutForm__title">Checkout</h1>
        <section className="checkoutForm__billing checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Billing details</h3>

          <div>
            <label htmlFor="name" className="checkoutForm__label">Name</label>
            <input type="text" id="name" name="name" placeholder="Alexei Ward" className="checkoutForm__input" />
          </div>
          <div>
            <label htmlFor="email" className="checkoutForm__label">Email Address</label>
            <input type="email" id="email" name="email" placeholder="alexei@mail.com" className="checkoutForm__input" />
          </div>
          <div>
            <label htmlFor="phone" className="checkoutForm__label">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+1 202-505-0136" className="checkoutForm__input" />
          </div>

        </section>
        <section className="checkoutForm__shipping checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Shipping info</h3>
          <div>
            <label htmlFor="address" className="checkoutForm__label">Your Address</label>
            <input type="text" id="address" name="address" placeholder="1137 Williams Avenue" className="checkoutForm__input--large" />
          </div>

          <div>
            <label htmlFor="zip" className="checkoutForm__label">Zip Code</label>
            <input type="text" id="zip" name="zip" placeholder="10001" className="checkoutForm__input" />
          </div>
          <div>
            <label htmlFor="city" className="checkoutForm__label">City</label>
            <input type="text" id="city" name="city" placeholder="New York" className="checkoutForm__input" />
          </div>
          <div>
            <label htmlFor="country" className="checkoutForm__label">Country</label>
            <input type="text" id="country" name="country" placeholder="United States" className="checkoutForm__input" />
          </div>

        </section>
        <section className="checkoutForm__payment checkoutForm__section">
          <h3 className="checkoutForm__subtitle">Payment Details</h3>

          <label className="checkoutForm__label">Payment method</label>

          <div className="checkoutForm__radioGroup">
            <div className="checkoutForm__radio" id="radio">
              <input type="radio" id="e-money" name="method" value="e-money" className="checkoutForm__input--radio" checked />
              <label htmlFor="e-money" className="checkoutForm__radioLabel">e-Money</label>
            </div>

            <div className="checkoutForm__radio" id="radio">
              <input type="radio" id="cash-on-delivery" name="method" className="checkoutForm__input--radio" value="cash-on-delivery" />
              <label htmlFor="cash-on-delivery" className="checkoutForm__radioLabel">Cash on delivery</label>
            </div>
          </div>

          <div>
            <label htmlFor="em-num" className="checkoutForm__label">e-money Number</label>
            <input type="text" id="em-num" name="em-num" placeholder="238521993" className="checkoutForm__input" />
          </div>

          <div>
            <label htmlFor="em-pin" className="checkoutForm__label">e-money PIN</label>
            <input type="text" id="em-pin" name="em-pin" placeholder="6891" className="checkoutForm__input" />
          </div>

        </section>
      </div>
    </main>
  );
};

export default CheckoutForm;
