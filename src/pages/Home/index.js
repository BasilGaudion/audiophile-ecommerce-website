import './styles.scss';
import Header from '../../components/Header';
import HeroSection from '../../components/Home/HeroSection';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
