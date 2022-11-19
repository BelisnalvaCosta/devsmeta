import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (    
      <header>
      <div className="devsmeta-logo-container">
        <img src={logo} alt="DEVSMeta" />
          <h1>DEVSMeta</h1>
          <p>
            Desenvolvindo por
            <a href="http://github.com/BelisnalvaCosta/">@devsuperior</a>
          </p>
        </div>
      </header>
    
  )
}

export default Header;