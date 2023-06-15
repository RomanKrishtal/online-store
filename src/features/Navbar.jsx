import Categories from "./Categories.jsx";
import Content from "./Content.jsx";
import Deals from "./Deals.jsx";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = ({to}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( { path: resolvedPath.pathname, end: true} )
    return(
        <>
        <div className=" text-neutral-200">
        <div className="flex bg-cyan-950">
        <img></img>
        <a>
        <p className=" mr-auto">Deliver to</p>
        </a>
        <div className=" mr-auto">
        <input type="text" className=" border-2"/>
        <button>
            <img></img>
        </button>
        </div>
        <span className=" mr-auto">Language</span>
        <span className=" mr-auto">Returns & orders</span>
        <span>Cart</span>
        </div>
        <div className="bg-cyan-900">
            <ul className="flex">
                <li className={isActive ? "active mr-auto": "mr-auto"}>
            <Link to="deals">
                Deals
            </Link>
            </li>
            <li className={isActive ? "active mr-auto": "mr-auto"}>
            <Link to="content">
                Content
            </Link>
            </li>
            
            <li className={isActive ? "active mr-auto": "mr-auto"}>
            <Link to="customer">
                Customer Service
            </Link>
        </li>
            <li className={isActive ? "active": ""}>
            <Link to="sell">
                Sell
            </Link>
        </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar;