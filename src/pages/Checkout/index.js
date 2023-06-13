import './styles.scss';
import Header from '../../components/Header';
import CheckoutForm from '../../components/CheckoutPage/CheckoutForm';
import Footer from '../../components/Footer';
import CheckoutSummary from '../../components/CheckoutPage/CheckoutSummary';
import Main from '../../components/Main';

const Checkout = () => {
  return (
    <div className="chekout">
      <Header />
      <Main>
        <section className="checkout__desktopflex">
          <CheckoutForm />
          <CheckoutSummary />
        </section>
      </Main>
      <Footer />
    </div>
  );
};

export default Checkout;
