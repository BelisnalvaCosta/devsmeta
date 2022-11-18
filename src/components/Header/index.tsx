import logo from '../../assets/img/logo.svg'
import './styles.css'
import SalesCard from "./components/SalesCard"

function Header() {
  return (    
      <header>
      <div className="devsmeta-logo-container">
        <img src={logo} alt="DEVSMeta" />
          <h1>DEVSMeta</h1>
          <p>
            <SalesCard />
          </p>
        </div>
      </header>
    
  )
}

export default Header