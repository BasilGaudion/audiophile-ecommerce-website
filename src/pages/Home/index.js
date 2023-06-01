import './styles.scss';
import Header from '../../components/Header';
import HeroSection from '../../components/Home/HeroSection';
import Categories from '../../components/Categories';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Categories />
    </div>
  );
};

export default Home;
