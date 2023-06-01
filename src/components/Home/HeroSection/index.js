import './styles.scss';
import mobilHeroImg from '../../../assets/images/home/mobile/image-header.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <img className="hero--image" src={mobilHeroImg} alt="Xx99 mark 2 Headphones" />
      <div className="hero__container container">
        <h3 className="hero__container--subtitle">New product</h3>
        <h2 className="hero__container--title">Xx99 mark ii Headphones</h2>
        <p className="hero__container--text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <button className="hero__container--button" type="button">See product</button>
      </div>
    </section>
  );
};

export default HeroSection;
