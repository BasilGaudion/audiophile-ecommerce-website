import './styles.scss';
import Header from '../../components/Header';
import HeroSection from '../../components/Home/HeroSection';
import Categories from '../../components/Categories';
import ProductOverview1 from '../../components/Home/ProductOverview1';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Categories />
      <ProductOverview1 />
    </div>
  );
};

export default Home;
