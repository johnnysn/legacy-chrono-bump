import { useState } from 'react'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Header />
    <Main />
    <Footer />
  </>
  )
}

export default App
