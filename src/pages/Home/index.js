import './styles.scss';
import Header from '../../components/Header';
import HeroSection from '../../components/Home/HeroSection';
import Categories from '../../components/Categories';
import ProductOverview1 from '../../components/Home/ProductOverview1';
import ProductOverview2 from '../../components/Home/ProductOverview2';
import ProductOverview3 from '../../components/Home/ProductOverview3';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Categories />
      <ProductOverview1 />
      <ProductOverview2 />
      <ProductOverview3 />
    </div>
  );
};

export default Home;
