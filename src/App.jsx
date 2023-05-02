import { Outlet } from 'react-router-dom'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
