import Head from 'next/head';
import Image from 'next/image';
import { use, useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { Cheerio } from 'cheerio';
import Header from './header';

export default function Home() {
  const [searchField, setSearchField] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [id, setId] = useState(5);


  async function handleSubmitButtonPressed() {
    const productResults = await fetchProductResults(searchField);
    console.log(productResults);
    setSearchResults(productResults);
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
  <div>
   <Header />
   {/* <LoadingSpinner disabled={!isLoading} /> */} 
   <div className='flex justify-center items-center h-screen flex-col'>
      <div className='flex justify-center'>
         <h1 className="text-2xl">
            Enter product to search for:
         </h1>
         <input className='rounded-md outline outline-offset-2 outline-1 ml-3' type='text' onChange={e => setSearchField(e.target.value)}/>
         <input className='rounded-md outline outline-offset-2 outline-1 ml-3' type='text' onChange={e => setId(e.target.value)}/>
      </div>
      <div>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5' onClick={ handleSubmitButtonPressed }>Submit</button>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5' onClick={ handlePrintByIdPressed }>Print Data By ID</button>
      </div>
      <section className="text-gray-600 body-font">
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
               <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                  Search to find the best prices for your favorite items
               </h1>
               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Our application will parse Amazon, Target, and Walmart for the items you are looking for and display them to you to help you find the best deals and save you money!
               </p>
            </div>
            <div className="flex flex-wrap -m-4">
               <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                     <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="https://dummyimage.com/200x200"
                        />
                     <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                           Alper Kamu
                        </h2>
                        <h3 className="text-gray-500 mb-3">UI Developer</h3>
                        <p className="mb-4">
                           DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                           vaporware.
                        </p>
                        <span className="inline-flex">
                           <a className="text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                              </svg>
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                     <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="https://dummyimage.com/201x201"
                        />
                     <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                           Holden Caulfield
                        </h2>
                        <h3 className="text-gray-500 mb-3">UI Developer</h3>
                        <p className="mb-4">
                           DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                           vaporware.
                        </p>
                        <span className="inline-flex">
                           <a className="text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                              </svg>
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                     <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="https://dummyimage.com/202x202"
                        />
                     <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                           Thotticus Finch
                        </h2>
                        <h3 className="text-gray-500 mb-3">UI Developer</h3>
                        <p className="mb-4">
                           DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                           vaporware.
                        </p>
                        <span className="inline-flex">
                           <a className="text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                              </svg>
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                     <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="https://dummyimage.com/203x203"
                        />
                     <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                           Henry Letham
                        </h2>
                        <h3 className="text-gray-500 mb-3">UI Developer</h3>
                        <p className="mb-4">
                           DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                           vaporware.
                        </p>
                        <span className="inline-flex">
                           <a className="text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                              </svg>
                           </a>
                           <a className="ml-2 text-gray-500">
                              <svg
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 className="w-5 h-5"
                                 viewBox="0 0 24 24"
                                 >
                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                              </svg>
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</div>
  );
}
