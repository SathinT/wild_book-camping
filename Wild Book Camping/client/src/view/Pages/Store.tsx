import {Component} from "react";
import "../../App.css";
import line2 from "../../assests/Line 2.png";
import {Link} from "react-router-dom";

export class Store extends Component {
    render() {
        return (
            <div>
                <div id="banner6">
                    <div className="text-6xl font-bold text-center pt-60">
                        <h1 className="text-[#D8E4B1]">WILD TOOLS FOR THE ULTIMATE</h1>
                        <h1 className="text-[#FF9800] text-7xl font-sans pt-2">SURVIVAL</h1>
                    </div>
                </div>

                <Link to="/cycles">
                <div id="cycleAdvertisement" className="m-3 mb-2 ml-[25%]">
                    <div className="text-white text-3xl pt-6 pl-8 font-bold">
                        <h1>Check Out Our Latest</h1>
                        <h1 className="text-4xl text-[#D8E4B1]">MOUNTAIN CYCLE</h1>
                        <h1>collection</h1>
                        <h1 className="mt-24 text-2xl">10 Products →</h1>
                    </div>
                </div>
            </Link>

                <div className="flex mb-3 ml-[25%] mr-[23%] justify-center">
                    <Link to="/campingGear">
                    <div id="campingGearCat">
                        <h1 className="text-white pl-3 pt-80 text-5xl font-semibold">Camping <br/> <span className="text-[#FF9800]">Gear</span>
                            <span className="ml-8 font-normal opacity-90 text-white text-2xl">10 Products →</span>
                        </h1>
                    </div>
                </Link>
                    <Link to="/hikingGear">
                    <div id="hikingGearCat" className="ml-2">
                        <h1 className="text-white pl-3 pt-80 text-5xl font-semibold">Hiking <br/> <span className="text-[#FF9800]">Gear</span>
                            <span className="ml-8 font-normal opacity-90 text-white text-2xl">10 Products →</span>
                        </h1>
                    </div>
                    </Link>
                </div>

                <div>
                    <div className="ml-96 flex mb-9">
                        <img className="h-1 w-[27%] mr-3 mt-5" src={line2}/>
                        <h1 className="text-4xl font-bold">SEASONAL OFFERS</h1>
                        <img className="h-1 w-[27%] ml-3 mt-5" src={line2}/>
                    </div>

                    <div className="flex ml-96 justify-between mr-96 mb-9">
                        <div id="offer1">
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 ml-80 mt-64 hover:animate-[bounce_2s_infinite]">Shop
                                Now
                            </button>
                        </div>
                        <div id="offer2">
                            <button
                                className="text-xl text-[#FF9800] font-semibold border-2 border-[#FF9800] p-2 rounded h-12 ml-80 mt-64 hover:animate-[bounce_2s_infinite]">Shop
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
