import arrowIcon from '../../assets/arrow.svg';
import gamerImg from '../../assets/gamer.svg';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
                <h3 className="home-text-subtitle">Clique no botao abaixo e saiba quais sao os jogos que os gamers estao escolhendo!</h3>
                <div className="home-actions">
                    <button className="home-btn">QUERO SABER QUAIS SAO</button>
                    <div className="home-btn-icon"><img src={arrowIcon} alt="Arrow" /></div>
                </div>
            </div>
            <img src={gamerImg} alt="Gamer" className='home-image' />
        </div>
    )
}

export default Home;