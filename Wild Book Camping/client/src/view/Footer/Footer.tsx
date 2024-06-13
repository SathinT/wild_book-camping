import {Component} from "react";
import '../../App.css';

import dial from '../../assests/Dial.png'
import email from '../../assests/Email.png'
import social from '../../assests/social-media.png'

import whatsapp from '../../assests/socialMedia/WhatsApp.png'
import facebook from '../../assests/socialMedia/Facebook.png'
import insta from '../../assests/socialMedia/Instagram.png'
import youtube from '../../assests/socialMedia/YouTube.png'
import tiktok from '../../assests/socialMedia/TikTok.png'

export class Footer extends Component {
    render() {
        return (
            <div className="w-full" id="footer">
                <div className="pt-12 flex justify-between pl-80 pr-80 ">
                    <div className="flex">
                    <img className="h-16 mt-2" src={dial}/>
                    <div>
                        <h1 className="text-white text-2xl">Customer Support</h1>
                        <h1 className="text-[#D8E4B1] text-3xl font-semibold">041-2242967</h1>
                    </div>
                    </div>

                    <div className="flex">
                    <img className="h-16 mt-2" src={email}/>
                    <div>
                        <h1 className="text-white text-2xl">Email Us</h1>
                        <h1 className="text-[#D8E4B1] text-3xl font-semibold">wildbook@gmail.com</h1>
                    </div>
                    </div>

                    <div className="flex">
                    <img className="h-16 mt-2" src={social}/>
                    <div>
                        <h1 className="text-white text-2xl">Follow Us On</h1>
                        <div className="flex">
                            <img src={whatsapp}/>
                            <img src={facebook}/>
                            <img src={insta}/>
                            <img src={youtube}/>
                            <img src={whatsapp}/>
                        </div>
                    </div>
                    </div>
                </div>
                <h1 className="text-[#D8E4B1] text-center mt-14">Copyright © 2023 Sathin Thenuja. All Rights Reserved</h1>
            </div>
        );
    }
}