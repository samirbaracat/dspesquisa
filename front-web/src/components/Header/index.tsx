import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export function Header() {
    return(
    <header className='main-header'>
        <img src={logoImg} alt="Logo" />
        <Link to="/">
            <div className="logo-text">
                <span className="logo-text-1">Big Game</span>
                <span className="logo-text-2"> Survey</span>
            </div>
        </Link>
    </header>
    )
}