import Header from '../../components/Header';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import './styles.scss';

const NotFound = () => {
  console.log('page0404');
  return (
    <div className="category">
      <Header />
      <h1>Page 404</h1>
      <Categories />
      <StoreDescription />
      <Footer />
    </div>
  );
};

export default NotFound;
