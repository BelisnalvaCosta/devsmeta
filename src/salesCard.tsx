import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import './styles.css'

function SalesCard(): JSX.Element{
  return (  
    <>  
      <Header />
      <main>
        <section id="sales-card">
          <div className="devsmeta-container">                    
          </div>
        </section>
      </main>   
    </> 
  )
}

export default SalesCard