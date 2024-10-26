import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import OrderConfirmation from "./pages/OrderConfirmation"
import FilterData from "./pages/FilterData"
import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [order, setOrder] = useState(null)

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation order={order} />}></Route>
        <Route path='/filter-data' element={<FilterData />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
