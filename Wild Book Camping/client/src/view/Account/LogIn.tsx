import {Component} from "react";
import {Link} from "react-router-dom";


export class LogIn extends Component {
    render() {
        return (
            <>
                <div className="h-full md:flex pt-[8%] pb-16 pl-72 pr-44">
                    <div id="logBg">
                        <div className="pt-28">
                            <h1 className="text-[#FF9800] font-bold text-4xl font-sans text-center">WILD BOOK CAMPING</h1>
                            <p className="text-white mt-1 text-center">The Most Popular Camping Gear Rental Site</p>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 justify-center py-10 items-center bg-[#A0C49D] bg-opacity-60">
                        <form className="bg-transparent">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                                </svg>
                                <input className="pl-2 outline-none border-none bg-transparent placeholder-green-900"
                                       type="text" name="" id="" placeholder="Username"/>
                            </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <input className="pl-2 outline-none border-none bg-transparent placeholder-green-900"
                                       type="text" name="" id="" placeholder="Password"/>
                            </div>
                            <span className="mt-4 text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                            <button type="submit"
                                    className="block w-full bg-green-700 hover:bg-green-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login
                            </button>
                            <Link to="/register">
                            <span className="text-sm ml-2 hover:text-blue-500 underline">Register Now</span>
                            </Link>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
