import { Routes, Route } from 'react-router-dom'
import Navbar from './features/Navbar.jsx'
import Content from './features/Content.jsx'
import Footer from './features/Footer.jsx'
import Deals from './features/Deals.jsx'
import Categories from './features/Categories.jsx'
import Sell from './Sell.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Routes>
        <Route path='deals' element={<Deals />} />
        <Route path='categories' element={<Categories />} />
        <Route path='sell' element={<Sell />} />
      </Routes>
    </>
  )
}

export default App

// ae3620924895adfc2db97818b1408599