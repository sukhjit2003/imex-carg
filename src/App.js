import logo from './logo.svg';
import react ,{useState} from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home'
import About from './components/about';
import tracking from './components/tracking';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  const renderpage=()=>{
    if (currentPage==="Home"){
      return(
        <Home />
      )
    }
    else if (currentPage==="About"){
      return(
        <About />
      )
    }
    else if (currentPage==="Contact"){
      return(
        <Contact />
      )
    }
    else if (currentPage==="tracling"){
      return(
        <tracking />
      )
    }
  }
  return (
    <div id="main">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <h1>{renderpage()}</h1>
      <Footer />
    </div>
  );
}

export default App;
