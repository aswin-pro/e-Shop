import { Link, useNavigate } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
    const [isModelOpen, setisModelOpen] = useState(false)
    const [isLogin, setisLogin] = useState(true)
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleSearch=(e)=>{
    //     e.preventDefault()
    //     dispatch(setSearchTerm(search))
    //     navigate('/filter-data')
    // }

    function openSignup() {
        setisLogin(false)
        setisModelOpen(true)
    }

    function openLogin() {
        setisLogin(true)
        setisModelOpen(true)
    }

    const products = useSelector(state => state.cart.products)

    return (
        <nav className="bg-white shadow-md">
            {/* Nav-Sec 1 */}
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">

                <div className="text-lg font-bold">
                    <Link to="/">e-SHOP</Link>
                </div>
                <div className="relative flex-1 mx-4">
                    {/* <form onSubmit={handleSearch}> */}
                    <input type="text" placeholder="Search Product"
                        className="w-full border py-2 px-4 focus:outline-none" onChange={(e) => { setSearch(e.target.value), dispatch(setSearchTerm(search)), navigate('/filter-data') }} />
                    <FaSearch className="absolute top-3 right-3 text-red-500" />
                    {/* </form> */}
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="text-lg" />
                        {products.length > 0 ? (
                            <span className="absolute  bottom-3 text-xs w-4 h-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">{products.length}</span>
                        ) : <></>}
                    </Link>
                    <button className="hidden md:block" onClick={() => setisModelOpen(true)}>
                        Login | Register
                    </button>
                    <button className="block md:hidden" onClick={() => setisModelOpen(true)}>
                        <FaUser />
                    </button>
                </div>
            </div>

            {/* Nav-sec 2 */}
            <div className="flex items-center justify-center space-x-10 pb-4 text-sm font-bold">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/shop" className="hover:underline">
                    Shop
                </Link>
                <Link to="/contact" className="hover:underline">
                    Contact
                </Link>
                <Link to="/about" className="hover:underline">
                    About
                </Link>
            </div>
            <Modal isModelOpen={isModelOpen} setisModelOpen={setisModelOpen}>
                {isLogin ? <Login openSignup={openSignup} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>
    )
}

export default Navbar