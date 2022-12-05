import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Alert from '../components/Alert'
import useAuthStore from '../store/auth'
import { setUser } from '../utils/setUser'
import { useRouter } from 'next/router'

const initialState = {firstName:'', lastName:'', email:'', password:'', confirmPassword:''}

const auth = () => {

  const [formData, setFormData] = useState(initialState)
  const [alertMessage, setAlertMessage] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const { addUser } = useAuthStore()
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(isSignup) {
      // Check if passwords are matched
      if(formData.password !== formData.confirmPassword) {
        setAlertMessage("Password do not match")
      } else {
        await axios.post('https://auth-neon.vercel.app/user/register', formData)
        .then(res => {
          setUser(res.data, addUser)
          router.push('/')
        }, err => {
          console.log(err)
          setAlertMessage(err?.response?.data?.message)          
        })
      }
    } else {
      await axios.post('https://auth-neon.vercel.app/user/login', formData)
      .then(res => {
        setUser(res.data, addUser)
        router.push('/')
      }, err => {
        console.log(err)
        setAlertMessage(err?.response?.data?.message)
      })
    }
  }

  return (
    <div>
        <Navbar/>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mt-[100px]">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {alertMessage && <Alert message={alertMessage}/>}
                    <div className='flex justify-center'>
                      <div className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
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
                      </div>
                    </div>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        {isSignup ? "Create an account" : "Sign in"}
                    </h1>
                      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                          {isSignup &&
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                              <input name="firstName" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                            </div>
                          }
                          {isSignup && 
                            <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                              <input name="lastName" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                            </div>                          
                          }
                          <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input name="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                          </div>
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                          </div>
                          {isSignup && 
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" onChange={handleChange} name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                          }
                          { isSignup && <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                              </div>
                              <div className="ml-3 text-sm">
                                <label className="font-light text-black dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                              </div>
                          </div>}
                          <button type="submit" className="w-full bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 cursor-pointer">{isSignup ? "Create an account" : "Sign in"}</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a onClick={() => setIsSignup(prev => !prev)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">{isSignup ? "Login here" : "Sign up here"}</a>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default auth