import Header from '../../components/Header';
import Categories from '../../components/Categories';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';
import './styles.scss';
import Main from '../../components/Main';

const NotFound = () => {
  console.log('page0404');
  return (
    <div className="category">
      <Header />
      <Main>
        <h1>Page 404</h1>
        <Categories />
        <StoreDescription />
      </Main>
      <Footer />
    </div>
  );
};

export default NotFound;
