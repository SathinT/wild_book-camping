import React, {Component} from "react";
import '../../App.css';
import ad1 from '../../assests/about/whyChoose.png'
import line2 from "../../assests/Line 2.png";

import g1 from '../../assests/about/g1.jpg'
import g2 from '../../assests/about/g2.jpg'
import g3 from '../../assests/about/g3.jpg'
import g4 from '../../assests/about/g4.jpg'
import g5 from '../../assests/about/g5.jpg'
import g6 from '../../assests/about/g6.jpg'
import g7 from '../../assests/about/g7.jpg'
import g8 from '../../assests/about/g8.jpg'
import g10 from '../../assests/about/g10.jpg'
import g11 from '../../assests/about/g11.jpg'

export class About extends Component {
    render() {
        return (
            <div>
                <div id='aboutCover'>
                    <div className='pt-40 pl-96'>
                        <h1 className='text-[#D8E4B1] text-7xl font-bold'>HERE’S SOME MORE FACTS <br/>
                            <span className='text-[#FF9800] text-8xl'>ABOUT US</span></h1>
                    </div>
                    <div className='pl-96 pt-80'>
                        <h1 className='text-[#D8E4B1] text-2xl font-semibold'>Welcome to Wild Book Camping – Your
                            Gateway to Adventure!</h1>

                        <p className='text-white text-2xl pt-4'>we believe in the transformative power of the great
                            outdoors. A
                            place<br/>where camping and hiking dreams come to life. Whether you're an<br/>
                            experienced adventurer, our online store and gear rental service are<br/>designed to cater
                            to your every need.</p>
                    </div>
                </div>

                <div className=''>
                    <img className='w-full pl-64 pr-64 pt-12 pb-10' src={ad1}/>
                </div>

                <div className="ml-96 flex mb-5 mt-4">
                    <img className="h-1 w-[32%] mr-3 mt-5" src={line2}/>
                    <h1 className="text-4xl font-bold">GALLERY</h1>
                    <img className="h-1 w-[32%] ml-3 mt-5" src={line2}/>
                </div>

                <div className='ml-96 text-center mr-96 text-xl font-semibold'>
                    <p>Step into the visual tapestry of Wild Book Camping through our captivating gallery. Immerse
                        yourself in<br/>
                        the breathtaking beauty of recent camping and hiking adventures, as shared by our incredible
                        community<br/>
                        of outdoor enthusiasts.</p>
                    <br/>
                    <p>Here, we showcase the real stories of our customers—their triumphs at mountain peaks, the
                        camaraderie<br/>
                        around crackling campfires, and the serene moments that only nature can provide. Each photo is
                        a <br/>
                        testament to the spirit of exploration and the joy that comes from embracing the great outdoors.
                    </p>
                </div>

                <div className="container mx-auto px-3 -mb-56 lg:px-24 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g1}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g2}/>
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g3}/>
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g11}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g4}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g5}/>
                            </div>
                        </div>
                    </div>
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g6}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g7}/>
                            </div>
                            <div className="w-full h-[26%] p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g8}/>
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full h-[75%] p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center ring-[#FF9800] ring-4 ring-offset-0 hover:ring-8"
                                    src={g10}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div id='whatpeoplesay' className="flex items-center justify-center">
                    <div className="w-full px-5 text-black">
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="text-center max-w-xl mx-auto">
                                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-[#D8E4B1] pb-5">What people <br/>are saying.</h1>
                            </div>
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-1/3">
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto rounded-lg bg-white bg-opacity-70 border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}