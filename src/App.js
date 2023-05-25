
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {
  // const currentPage = "Contact"
  const [currentPage, setCurrentPage] = useState("About")

  function renderPage () {
    if(currentPage == "About") {
      return <About/>
    }
    if(currentPage == "Portfolio") {
      return <Portfolio/>
    }
    if(currentPage == "Contact") {
      return <Contact/>
    }
    if(currentPage == "Resume") {
      return <Resume/>
    }
  }

  return (
   <>
    <Header setCurrentPage={setCurrentPage} />
    <Container className="mt-5">
      {renderPage()}
    </Container>

    <Footer />
   </>
  );
}

export default App;
