import './styles.scss';
import Header from '../../components/Header';
import CheckoutForm from '../../components/CheckoutPage/CheckoutForm';
import Footer from '../../components/Footer';
import CheckoutSummary from '../../components/CheckoutPage/CheckoutSummary';

const Checkout = () => {
  return (
    <div className="chekout">
      <Header />
      <section className="checkout__desktopflex">
        <CheckoutForm />
        <CheckoutSummary />
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
