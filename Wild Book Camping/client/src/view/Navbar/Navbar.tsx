import {Component} from "react";
import logo from "../../assests/Wild Book Logo.png"
import line1 from "../../assests/Line 1.png"
import search from "../../assests/search.png"
import cart from "../../assests/Shopping Cart.png"
import account from "../../assests/Male User.png"
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="w-full px-6 fixed bg-black bg-opacity-65">
                <div className="flex mx-auto items-center justify-between pb-1 z-10 max-w-6xl">
                    <div className="pl-3 flex">
                        <img className="w-16 h-20 pt-3" src={logo}/>
                        <h1 className="pl-3 pt-3 text-2xl text-white font-bold">WILD BOOK <br/> CAMPING</h1>
                    </div>
                    <div>
                        <ul className="flex text-2xl text-white font-bold pt-3">
                            <li className="pr-4 hover:text-[#FF9800]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="pr-4 hover:text-[#FF9800]">
                               <Link to="/store">Store</Link>
                            </li>
                            <li className="pr-4 hover:text-[#FF9800]">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="pr-4 hover:text-[#FF9800]">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <img className="pt-2 pb-2 w-[96%]" src={line1}/>
                        <div className="flex">
                            <div className="flex bg-white h-7 mr-2">
                                <input placeholder="Search" className="bg-transparent outline-none border-none w-52 pl-3"></input>
                                <img src={search}/>
                            </div>
                            <Link to="/cart">
                            <img className="pl-2 rounded-xl hover:bg-[#FF9800]" src={cart}/>
                            </Link>
                            <Link to="/login">
                            <img className="pl-2 rounded-xl hover:bg-[#FF9800]" src={account}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
