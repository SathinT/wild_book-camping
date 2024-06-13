export default function ProductCard() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-fit rounded-lg overflow-hidden border mt-8">
                    <img className="w-full" src={"https://cdn.greencloudpos.com/nolimit.lk/product/NOLIMITWomen'sCasualDress-0-1716183781581-0Y7A7927.jpg?width=360"} alt={""} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{""}</div>
                        <small className="text-gray-700 font-medium">Women</small><br/>
                        <small className="text-black font-bold">Nolimit Women's Casual Dress</small><br/>
                        <small className=" text-black font-bold">
                            LKR {"10000.00"}
                        </small>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Women</span>
                    </div>
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs font-bold rounded-bl">NEW</div>
                </div>
            </div>
        </>
    );
}