import InfoCard from "./info-card.component";

export default function OrderStatistics() {
    return (
        <><div className="mt-3 p-6 rounded-xl">
                <p className="font-bold text-2xl mb-5">Top products</p>
                <div className="w-full flex gap-x-3">
                    <table className="w-full border bg-white rounded-t-xl">
                        <thead>
                            <tr className="bg-[#D67F00] justify-between text-white">
                                <th className="text-left px-3 rounded-tl-xl py-2">Title</th>
                                <th className="text-left px-3 py-2">Sold</th>
                                <th className="text-left px-3 rounded-tr-xl py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                            <TopProductTableBody imgUrl="https://cdn.ishop.cholobangla.com/uploads/thumb-product-51-1.webp" column1Value="Homesick New Home Reed Diffuser"column2Value="66" column3Value="$3,000"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


interface tableBodyProp{
    imgUrl:string;
    column1Value:string;
    column2Value:string;
    column3Value:string;
}

function TopProductTableBody(prop:tableBodyProp) {
    return (
        <tr className="border-b hover:bg-[#f3f6ff]">
            <td className="px-3 flex items-center">
                <span>
                    <img width={"60px"} src={`${prop.imgUrl}`} alt="" />
                </span>
                <a href="">{prop.column1Value}</a>
            </td>
            <td className="px-3">
                <p>{prop.column2Value}</p>
            </td>
            <td className="px-3">
                <p>{prop.column3Value}</p>
            </td>
        </tr>
    );
}