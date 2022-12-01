import Image from 'next/image';
import { useState } from 'react';
import Header from './header';
import LoadingOverlay from 'react-loading-overlay-ts';

export default function Home() {
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);


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

  return (
    <LoadingOverlay
      active={isLoadingSearch}
      spinner
      text="Searching...">
      <div className='h-screen'>
          <div className=''>
            <Header />
          </div>
          <hr />
          <div className='flex justify-center items-center flex-col pt-8 pb-8'>
            <h2 className='text-3xl mb-32 text-slate-800'>Welcome to Price HERO</h2>
            <div className='flex justify-center'>
                <h2 className="text-2xl">
                  Enter product to search for:
                </h2>
                <input className='rounded-md outline outline-offset-2 outline-1 ml-3 pl-2' type='text' onChange={e => setSearchField(e.target.value)}/>
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5' onClick={ handleSubmitButtonPressed }>Submit</button>
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
                <div className="flex flex-wrap -m-4">
                  {searchResults.map((element, index) => {
                  return(
                  <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                      <div className="h-full flex flex-col items-center text-center">
                        <Image
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                            src={`/api/imageProxy?imageUrl=${"https://dummyimage.com/200x200"}`}
                            width={200}
                            height={200}
                            />
                        <div className="w-full">
                            <h2 className="title-font font-medium text-lg text-gray-900">
                              {element.productName}
                            </h2>
                            <h3 className="text-gray-500 mb-3">{element.price}</h3>
                            <p className="mb-4">
                              Seller: {element.merchantName}
                            </p>
                            <span className="inline-flex">
                            <a className="text-blue-500" href={element.merchantLink}>View Product</a>
                            </span>
                        </div>
                      </div>
                  </div>
                  );
                  })}
                </div>
            </div>
          </section>
      </div>
    </LoadingOverlay>
  );
}
