import { useState, useEffect } from 'react'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) return null

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
