// import './App.css';

import { About, Footer, Header, Skills, Testimonials, Work  } from "./containers"
import { Navbar } from "./components";
import './App.scss'  

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
