import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <section className="text-black">

                <div className="container mx-auto px-5 py-36 -mb-28">

                    <div className="mb-12 flex w-full flex-col text-center">
                        <h1 className="title-font mb-4 text-5xl font-medium text-black">CONTACT US</h1>
                        <p className="mx-auto text-base leading-relaxed font-semibold lg:w-2/3">Feel free to reach out to us! Whether
                            you have a question,
                            feedback, or a collaboration proposal, we'd love to hear from you.
                        </p>
                    </div>

                    <div className="mx-auto md:w-2/3 lg:w-1/2">
                        <div className="-m-2 flex flex-wrap">

                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input type="text" id="name" name="name"
                                           className="peer w-full rounded border border-[#949D6F] bg-[#A0AB79] bg-opacity-40 py-1 px-3 text-base leading-8 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-950 focus:bg-[#949D6F] focus:ring-2 focus:ring-green-950"
                                           placeholder="Name"/>
                                    <label htmlFor="name"
                                           className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-950 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-950 peer-focus:font-bold">Name</label>
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input type="email" id="email" name="email"
                                           className="peer w-full rounded border border-[#949D6F] bg-[#A0AB79] bg-opacity-40 py-1 px-3 text-base leading-8 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-950 focus:bg-[#949D6F] focus:ring-2 focus:ring-green-950"
                                           placeholder="Email"/>
                                    <label htmlFor="email"
                                        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-950 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-950 peer-focus:font-bold">Email</label>
                                </div>
                            </div>
                            <div className="mt-4 w-full p-2">
                                <div className="relative">
                                    <textarea id="message" name="message"
                                              className="peer w-full rounded border border-[#949D6F] bg-[#A0AB79] bg-opacity-40 py-1 px-3 text-base leading-8 text-white placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-950 focus:bg-[#949D6F] focus:ring-2 focus:ring-green-950"
                                              placeholder="Message"></textarea>
                                    <label htmlFor="message"
                                           className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-950 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-950 peer-focus:font-bold">Message</label>
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <button
                                    className="mx-auto flex rounded border-0 bg-[#949D6F] py-2 px-8 text-lg text-white hover:bg-[#A0AB79] focus:outline-none">Send
                                </button>
                            </div>


                            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                                <a className="text-[#FF9800]">wildbookcamping@gmail.com</a>
                                <p className="my-5 leading-normal">49 Smith St. <br/>Galle Road , Matara<br/>Sri Lanka.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}