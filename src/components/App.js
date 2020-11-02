import React from 'react';
import Formation from './Formation';
import Experience from './Experience';
import Softskills from './Softskills';
import Hardskills from './Hardskills';
import Header from './Header';
import Footer from './Footer';
import Site from './Site';
import Blog from './Blog';
import logo from '../img/logo_ePortfolio.png'; 

class App extends React.Component{
    render(){
      return(
      <React.Fragment>
        <Header/>
                        
        <section id="presentationMain">
            <div className="logo">
                <img className="monLogo" src={logo} alt="logo" width="250" height="250"/>
                <p id="presentationPara">Développeuse fullstack...</p>
            </div>
            <div className="row">
                <Formation />
                <Experience />
            </div>
        </section>
  
        <section id="competences">
            <div>
                <h1>Compétences</h1>
            </div>
            <div className="row">
                <Softskills />
                <Hardskills />
            </div>
        </section>
                      
        <section id="realisations">
            <div>
                <h1>Réalisations</h1>
            </div>
            <div className="row">
                <Site />
                <Blog />
            </div>
        </section>
        <Footer />
      </React.Fragment> 
      )
    }
  }
  
  export default App