import React, {Component} from 'react';
import logo from "../../../assests/Admin/wildbook logo.png"
import camp from "../../../assests/Admin/campvector.png"

class AdminLogin extends Component {
    render() {
        return (
            <div>
                <div className="w-fit rounded-xl bg-black bg-opacity-60 mx-[25%] my-[9%] flex">
                    <div>
                        <img className="w-44 h-24 ml-12 py-5" src={logo}/>
                        <h1 className="px-32 pt-10 pb-36 text-5xl font-bold text-cyan-400 ">LOGIN</h1>
                        <img className="w-96 rounded-xl" src={camp}/>
                    </div>

                    <div className="mx-28">
                        <h1 className="text-white font-bold text-3xl mt-32 mb-14">Welcome Back!</h1>

                        <div className="mt-5">
                            <div className="flex items-center border-2 py-2 border-amber-600 px-3 rounded-2xl mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                                </svg>
                                <input className="pl-2 outline-none border-none bg-transparent placeholder-white"
                                       type="text" name="" id="" placeholder="Username"/>
                            </div>
                            <div className="flex items-center border-2 py-2 px-3 border-amber-600 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <input className="pl-2 outline-none border-none bg-transparent placeholder-white"
                                       type="text" name="" id="" placeholder="Password
                                       "/>
                            </div>

                            <button type="submit"
                                    className="block text-xl w-full bg-white hover:bg-amber-500 hover:text-white mt-12 py-2 rounded-2xl text-amber-600 font-semibold mb-2">Login
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;