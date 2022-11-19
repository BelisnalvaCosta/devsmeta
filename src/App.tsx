import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import Components from './styles.css';

function App(){
  return (  
    <>  
      <Header />
      <main>
        <section id="sales">
          <div className="devsmeta-container">
            <SalesCard />                    
          </div>
        </section>
      </main>   
    </> 
  )
}

export default App;