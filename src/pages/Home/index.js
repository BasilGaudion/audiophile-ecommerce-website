import './styles.scss';
import Header from '../../components/Header';
import HeroSection from '../../components/HomePage/HeroSection';
import Categories from '../../components/Categories';
import ProductOverview1 from '../../components/HomePage/ProductOverview1';
import ProductOverview2 from '../../components/HomePage/ProductOverview2';
import ProductOverview3 from '../../components/HomePage/ProductOverview3';
import StoreDescription from '../../components/StoreDescription';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Categories />
      <ProductOverview1 />
      <ProductOverview2 />
      <ProductOverview3 />
      <StoreDescription />
      <Footer />
    </div>
  );
};

export default Home;
