import {Component} from "react";
import '../../App.css';

import tent1 from "../../assests/tent1.png"
import line2 from "../../assests/Line 2.png"

import brand1 from "../../assests/brand icons/brand01.png"
import brand2 from "../../assests/brand icons/brand02.png"
import brand3 from "../../assests/brand icons/brand03.png"
import brand4 from "../../assests/brand icons/brand04.png"
import brand5 from "../../assests/brand icons/brand05.png"
import {Link} from "react-router-dom";

const handleButtonClick = () => {
    const section1 = document.getElementById('section1');
    }

export class Home extends Component {
    render() {
        return (
            <div>
            <div id="banner1">
                <h1 className="text-6xl text-[#D8E4B1] font-semibold pt-40 pl-96">EXPLORE THE EXTREME <br/>
                    <span className="text-7xl text-[#FF9800] font-sans font-bold">WILDS</span></h1>
                <div className="pt-28 pl-96">
                    <h1 className="text-3xl text-white font-semibold pb-2">Check Out The Latest</h1>
                    <button onClick={handleButtonClick} className="text-xl text-[#D8E4B1] font-semibold border-2 border-[#D8E4B1] p-2 rounded hover:animate-pulse">EXPLORE</button>
                </div>
            </div>


                <div id="section1" className="flex ml-96 mt-5 mb-5">
                    <div id="banner2" className="flex">
                        <div className="ml-7 mt-12">
                            <h1 className="text-white font-semibold text-5xl">Two Person Camping <br/> <span
                                className="text-[#D8E4B1]">Tent</span></h1>

                            <h1 className="mt-28 text-3xl text-white font-semibold">Per Day <br/> <span className="text-4xl font-bold text-[#B99470]">LKR.200</span></h1>

                            <Link to="/campingGear">
                            <button
                                className="mt-20 text-xl text-[#D8E4B1] font-semibold border-2 border-[#D8E4B1] p-2 rounded hover:animate-[bounce_2s_infinite]">Shop Now
                            </button>
                            </Link>
                        </div>
                        <div className="mt-36 mr-4">
                        <img className="w-[550px]" src={tent1}/>
                        </div>
                    </div>
                    <div>
                        <div id="banner3" className="flex flex-col items-end">
                            <h1 className="text-3xl pt-3 pr-5 font-bold text-[#FF9800] text-right">HIKING <br/>
                                <span className="text-white">STORIES</span></h1>
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded mr-5 mt-24 hover:animate-[bounce_2s_infinite]">Explore
                            </button>
                        </div>
                        <div id="banner4" className="flex flex-col items-end">
                            <h1 className="text-3xl pt-3 pr-5 font-bold text-[#FF9800] text-right">CAMPING <br/>
                                <span className="text-white">STORIES</span></h1>
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded mr-5 mt-24 hover:animate-[bounce_2s_infinite]">Explore
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ml-96 flex">
                    <h1 className="text-4xl font-bold">CAMP STORE</h1>
                    <img className="h-1 w-[60%] ml-6 mt-5" src={line2}/>
                </div>

                <div className="ml-96 mr-96 flex mb-9 justify-between">
                    <div id="storeBtn1" className="flex justify-between">
                        <h1 className="text-white text-3xl mt-2 ml-3">CAMPING <span
                            className="text-[#FF9800]">GEAR</span></h1>
                        <Link to="/campingGear">
                        <button
                            className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 mr-16 mt-3 hover:animate-[bounce_2s_infinite]">Shop Now
                        </button>
                        </Link>
                    </div>
                    <div id="storeBtn2">
                        <h1 className="text-white text-3xl mt-16 ml-3">HIKING<span
                            className="text-[#FF9800]">GEAR</span></h1>
                        <Link to="/hikingGear">
                        <button
                            className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 ml-3 mt-24 hover:animate-[bounce_2s_infinite]">Shop
                            Now
                        </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="ml-96 flex mb-9">
                        <img className="h-1 w-[30%] mr-3 mt-5" src={line2}/>
                        <h1 className="text-4xl font-bold">TOP BRANDS</h1>
                        <img className="h-1 w-[30%] ml-3 mt-5" src={line2}/>
                    </div>

                    <div className="flex ml-96 mr-96 justify-between mb-9">
                        <img className="hover:opacity-60" src={brand1}/>
                        <img className="hover:opacity-60" src={brand2}/>
                        <img className="hover:opacity-60" src={brand3}/>
                        <img className="hover:opacity-60" src={brand4}/>
                        <img className="hover:opacity-60" src={brand5}/>
                    </div>
                </div>

                <div>
                    <div className="ml-96 flex mb-9">
                        <img className="h-1 w-[27%] mr-3 mt-5" src={line2}/>
                        <h1 className="text-4xl font-bold">SEASONAL OFFERS</h1>
                        <img className="h-1 w-[27%] ml-3 mt-5" src={line2}/>
                    </div>

                    <div className="flex ml-96 justify-between mr-96 mb-9">
                        <div id="offer1">
                            <Link to="/campingGear">
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 ml-80 mt-64 hover:animate-[bounce_2s_infinite]">Shop
                                Now
                            </button>
                            </Link>
                        </div>
                        <div id="offer2">
                            <Link to="/campingGear">
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 ml-80 mt-64 hover:animate-[bounce_2s_infinite]">Shop
                                Now
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div id="banner5" className="mb-4 ml-80">
                        <div className="ml-[60%] pt-9">
                            <h1 className="text-white text-5xl font-semibold">Let’s Have Some</h1>
                            <h1 className="text-[#D8E4B1]  text-6xl font-semibold">LIFE LASTING</h1>
                            <h1 className="text-white text-7xl font-semibold">MEMORIES</h1>
                        </div>

                        <div className="ml-[49%] pt-20 text-center">
                            <h1 className="text-white font-semibold">Keep up with Special Offers, Advance Notice of
                                Sales, and Store Events. <br/>Join our mailing list here:
                            </h1>
                            <div className="flex justify-center mt-6">
                                <textarea placeholder="E-Mail"
                                          className="mt-6 w-96 h-10 pl-3 pt-2 bg-white bg-opacity-55 placeholder-black"></textarea>
                                <button
                                    className="text-xl text-[#D8E4B1] font-semibold border-2 border-[#D8E4B1] p-1 rounded h-11 mt-5 ml-2">Submit
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
