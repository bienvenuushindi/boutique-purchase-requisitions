import './App.css';
import Footer from './components/homepage/footer';
import Header from './components/homepage/header';
import Home from './components/homepage/home';

const App = () => (
  <div className="App">
    <Header />
    <div className="main__content">
      <Home />
    </div>
    <Footer />
  </div>
);

export default App;
