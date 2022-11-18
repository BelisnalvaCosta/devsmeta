import logo from '../../assets1/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
        <div className="devsmeta-logo-container">
            <img src={logo} alt="DEVSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="git@github.com:BelisnalvaCosta/meta.git">@devsuperior.ig</a>
            </p>
        </div>
    </header> 
        
    )
}

export default Header