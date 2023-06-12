import './styles.scss';
import Header from '../../components/Header';
import CheckoutForm from '../../components/CheckoutPage/CheckoutForm';
import Footer from '../../components/Footer';

const Checkout = () => {
  return (
    <div className="chekout">
      <Header />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Checkout;
