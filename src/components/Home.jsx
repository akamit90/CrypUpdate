import React from 'react';
import loadingGif from '../assets/loading.gif';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import TopNews from './TopNews';

function Home({
  currencies, 
  currentPage, 
  prevPage, 
  nextPage, 
  totalPages, 
  loading, 
  error, 
  setLoading
}) 
{
  return (
    <div className="mx-auto py-4 bg-white-400">
      <TopNews loading={loading} setLoading={setLoading}/>
      {/* when loading is true */}
      {loading && (
        <div className="flex justify-center items-center">
          <img src={loadingGif} alt="Loading" />
        </div>
      )}

      {/* when loading is false */}
      {!loading && (
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Available Supply
                </th>
                <th className="px-5 py-3 bg-gray-800 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Volume (24h)
                </th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((val) => (
                <tr key={val.id} className="bg-white">
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {val.rank}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm flex items-center">
                    <img className="w-6 h-6 mr-2" src={val.icon} alt={val.name} />
                    {val.name}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {val.symbol}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  ₹{val.price.toFixed(2)}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {val.availableSupply.toLocaleString()}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  ₹{val.volume.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button onClick={prevPage} className={`flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <GrLinkPrevious className="mr-2" /> Previous
            </button>
            <button onClick={nextPage} className={`flex items-center px-4 py-2 bg-gray-800 text-gray-100 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Next <GrLinkNext className="ml-2" />
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>  
  );
}

export default Home;
