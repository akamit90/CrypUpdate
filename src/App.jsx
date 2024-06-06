import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://openapiv1.coinstats.app/coins?page=${currentPage}&currency=INR&limit=50`, {
          headers: { 'X-API-KEY': 'QSzWoZlIs1tsH5IC2AfUi/BWjQF9pKkRmyBnPoYznhU=' }
        });
        setCurrencies(response.data.result);
        console.log(response.data);
        setTotalPages(response.data.meta.pageCount);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchItem = (searchTerm) => {
    const searchCoin = currencies.filter((searchFilterCoin) => (
      searchFilterCoin.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setCurrencies(searchCoin);

  };
  const ScrollToTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  return (
    <div className='bg-white text-black'>
      <BrowserRouter>
      <Navbar 
      handleSearchItem={handleSearchItem}
      currencies={currencies} 
      setCurrencies={setCurrencies}
      />
        <Routes>
      <Route path='/' element={<Home 
        currencies={currencies} 
        currentPage={currentPage} 
        loading={loading} 
        error={error} 
        totalPages={totalPages} 
        nextPage={nextPage} 
        prevPage={prevPage}
        ScrollToTop={ScrollToTop}
      />}/>
      <Route path='/news' element={<News/>}/>
      </Routes>
      <Footer ScrollToTop={ScrollToTop}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
