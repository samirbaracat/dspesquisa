import logoImg from '../../assets/logo.svg';
import './styles.css';

const Header = () => {
    return(
    <header className='main-header'>
        <img src={logoImg} alt="Logo" />
        <div className="logo-text">
            <span className="logo-text-1">Big Game</span>
            <span className="logo-text-2"> Survey</span>
        </div>
    </header>
    )
}

export default Header;