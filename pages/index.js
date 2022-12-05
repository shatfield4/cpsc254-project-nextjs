import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { FaSearch, FaEye } from 'react-icons/fa'; 
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import useAuthStore from '../store/auth';


export default function Home() {
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const { user } = useAuthStore()
  const router = useRouter()

  async function handleSubmitButtonPressed() {
    setIsLoadingSearch(true);
    const productResults = await fetchProductResults(searchField);
    const sortedResults = productResults.response.sort(function(a,b){return parseFloat(a.price.replace(/[A-Z]/gi, '').replace('$','').replace(' ', '').replace(',', '')) - parseFloat(b.price.replace(/[A-Z]/gi, '').replace('$','').replace(' ', '').replace(',', ''))});
    setSearchResults(sortedResults);
    setIsLoadingSearch(false);
  }

  async function handlePrintByIdPressed() {
    getInfoById(id);
  }

  async function getInfoById(id) {
   console.log(searchResults[id]);
  }

  async function fetchProductResults(searchKeyword) {
    try {
        const response = await fetch(`/api/apify?itemToSearch=${searchKeyword}`);
        return response.json();
    } catch (error) {
        throw error;
    }
 };

 useEffect(() => {
  if(!user)
    router.push('/auth')
 }, [])

  return (
    <div>
      {user ? (
        <LoadingOverlay
          active={isLoadingSearch}
          spinner
          text="Searching...">
          <div className='h-screen'>
              <div className=''>
                <Navbar/>
              </div>
              <hr />
              <div className='flex justify-center items-center flex-col pt-8 pb-8'>
                <h2 className='text-3xl mb-32 text-slate-900 font-semibold text-center'>Welcome to Price HERO <br/><br/>{user.name}</h2>
                <div className='flex justify-center'>
                    <h2 className="text-2xl">
                      Enter product to search for:
                    </h2>
                </div>
                <div className='flex justify-center items-center pt-8'>
                <div className='bg-gray-200 p-6 rounded-full'>
                  <input className='bg-gray-200 rounded-md outline outline-offset-2 outline-0 ml-3 pl-4 h-10 w-72 text-left text-2xl' type='text' onChange={e => setSearchField(e.target.value)}/>
                  <button className='bg-transparent font-semibold py-2 px-4 rounded text-3xl' onClick={ handleSubmitButtonPressed }><FaSearch/></button>
                  </div>
                </div>
              </div>
              <hr />
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                          Search to find the best prices for your favorite items
                      </h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                          Our application will parse Amazon, Target, and Walmart for the items you are looking for and display them to you to help you find the best deals and save you money!
                      </p>
                    </div>
                    <table className='border-collapse table-fixed w-full text-sm'>
                      <thead>
                        <tr>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-black dark:text-slate-800 text-left">Product</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-black dark:text-slate-800 text-left">Merchant</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-black dark:text-slate-800 text-left" >Price</th>
                          <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-black dark:text-slate-800 text-left">View</th>
                        </tr>
                      </thead>
                      <tbody>
                      {searchResults.map((element, index) => {
                      return(
                        <tr key={index}>
                          <td className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-800 text-left">{element.productName}</td>
                          <td className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-800 text-left">{element.merchantName}</td>
                          <td className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-800 text-left">{element.price}</td>
                          <td className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-800 text-left"><a className='' href={element.merchantLink}><FaEye className='text-2xl text-right'/></a></td>
                        </tr>
                      );
                      })}
                      </tbody>
                    </table>
                    </div>
              </section>
          </div>
        </LoadingOverlay>
      ) : 
      (<></>)}
    </div>
  );
}
