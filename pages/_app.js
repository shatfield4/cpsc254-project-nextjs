import { useState, useEffect } from 'react'
// Copyright 2022 Cyrus Baybay Sean Hatfield Rina Watanabe 

// cyrusbaybay@csu.fullerton.edu

// shatfield4@csu.fullerton.edu

// rinawata@csu.fullerton.edu


// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
