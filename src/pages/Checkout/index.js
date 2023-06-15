import './styles.scss';
import { useContext } from 'react';
import Header from '../../components/Header';
import CheckoutForm from '../../components/CheckoutPage/CheckoutForm';
import Footer from '../../components/Footer';
import CheckoutSummary from '../../components/CheckoutPage/CheckoutSummary';
import { ModalContext } from '../../utils/providers/useModalProvider';
import Main from '../../components/Main';
import Order from '../../components/Order';

const Checkout = () => {
  const { isVisibleOrder } = useContext(ModalContext);
  return (
    <div className="chekout">
      <Header />
      <Main>
        {isVisibleOrder && <Order />}
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
