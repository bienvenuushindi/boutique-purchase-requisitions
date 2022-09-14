import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/homepage/footer';
import Header from './components/homepage/header';
import Home from './components/homepage/home';
import Uncompleted from './components/homepage/uncompleted';
import Completed from './components/homepage/completed';
import Suppliers from './components/suppliers/suppliers';
import ProductList from './components/products/list';
import Requisitions from './components/requisitions/requisitions';

const App = () => (
  <div className="App">
    <Header />
    <div className="main__content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending" element={<Home />} />
        <Route path="/completed" element={<Uncompleted />} />
        <Route path="/uncompleted" element={<Completed />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/requisitions" element={<Requisitions />} />
        <Route
          path="*"
          element={(
            <div>
              404: Not Found
              <Link to="/">home</Link>
            </div>
)}
        />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
