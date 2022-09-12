import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/homepage/footer';
import Header from './components/homepage/header';
import Home from './components/homepage/home';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Header />
        <div className="main__content">
          <Route path="/" element={<Home />} />
        </div>
        <Route path="/" element={<Footer />} />
      </Routes>
    </Router>
  </div>
);

export default App;
