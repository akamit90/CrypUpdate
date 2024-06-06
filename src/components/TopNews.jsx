import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Responsive({loading,setLoading}) {
  const sliderRef = useRef(null);
  const [newsItem, setNewsItem] = useState([]);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openapiv1.coinstats.app/news/type/trending?limit=30`,
          {
            headers: { 'X-API-KEY': 'QSzWoZlIs1tsH5IC2AfUi/BWjQF9pKkRmyBnPoYznhU=' }
          }
        );
        setNewsItem(response.data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="slider-container relative px-8">
    <h1 className=' text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3'>
        Trending News
        </h1>

      <Slider ref={sliderRef} {...settings}>
         {newsItem.map((item, index) => (
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
                   {item.description ? item.description.length > 60 ? `${item.description.slice(0, 60)}...` : item.description : ""}
                 </p>
                 <a href={item.link} target="_blank" className="bg-slate-500 text-white px-3 py-1 rounded self-start mt-auto hover:bg-slate-800">
                   Read More
                 </a>
               </div>
             </div>
           </div>
            ))}
       
      </Slider>
      
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
}

export default Responsive;