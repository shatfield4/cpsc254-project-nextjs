import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useAuthStore from '../store/auth'
import { signOut } from '../utils/setUser'

const Navbar = () => {
    const { user, removeUser } = useAuthStore()
    const router = useRouter()

    const logout = () => {
        signOut(removeUser)
        router.push('/auth')
    }

  return (
    <div className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" onClick={() => router.push('/')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">Price HERO</span>
            </div>
            <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href='https://amazon.com'>Amazon.com</a>
                <a className="mr-5 hover:text-gray-900" href='https://walmart.com'>Walmart.com</a>
                <a className="mr-5 hover:text-gray-900" href='https://target.com'>Target.com</a>
                {user && 
                    <button className='text-red-500 hover:text-red-700 cursor-pointer' onClick={() => logout()}>Logout</button>
                }   

            </div>
        </div>
    </div>
  )
}

export default Navbar