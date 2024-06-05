import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import loadingGif from '../assets/loading.gif';

function News() {
  const [newsItem, setNewsItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openapiv1.coinstats.app/news/type/latest?limit=100`,
          {
            headers: { 'X-API-KEY': 'QSzWoZlIs1tsH5IC2AfUi/BWjQF9pKkRmyBnPoYznhU=' }
          }
        );
        setNewsItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsItem.slice(indexOfFirstNews, indexOfLastNews);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };

  return (
    <div className="container mx-auto p-2 mt-[10px]">
      <h1 className=' text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8'>
        Latest News
        </h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <img src={loadingGif} alt="Loading" />
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap -m-4">
            {currentNews.map((item, index) => (
             <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
             <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
               <a className="block relative h-48 flex-shrink-0">
                 {item.imgUrl ? (
                   <img src={item.imgUrl} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/015t2xcinyi4jmscpwifyrh-1-sixteen_nine.jpg?size=948:533'} />
                 ) : (
                   <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/015t2xcinyi4jmscpwifyrh-1-sixteen_nine.jpg?size=948:533' alt='Fallback' className="w-full h-full object-cover" />
                 )}
               </a>
               <div className="p-4 flex-1 flex flex-col">
                 <h2 className="font-bold text-xl mb-2">
                   {item.title ? item.title.length > 45 ? `${item.title.slice(0, 45)}...` : item.title : ""}
                 </h2>
                 <p className="text-gray-700 text-base mb-4 flex-grow">
                   {item.description ? item.description.length > 90 ? `${item.description.slice(0, 90)}...` : item.description : ""}
                 </p>
                 <a href={item.link} target="_blank" className="bg-slate-500 text-white px-3 py-1 rounded self-start mt-auto hover:bg-slate-800">
                   Read More
                 </a>
               </div>
             </div>
           </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={prevPage} className={`flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-lg ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}>
              <GrLinkPrevious className="mr-2" /> Previous
            </button>
            <button onClick={nextPage} className={`flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-lg ${currentNews.length < newsPerPage && 'opacity-50 cursor-not-allowed'}`}>
              Next <GrLinkNext className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
