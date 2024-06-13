import { useNavigate } from "react-router";
import Table, { TableBody } from "../../AdminComponent/table.component";
import AdminLayout from "../../common/AdminLayout";

const productTableColumn = ["title", "Status", "Brand", "Tax rule", "Purchased", "Selling", "Offered", "Created", "", "", ""]

export default function AdminProduct() {

    const navigate = useNavigate()

    return (
        <>
            <AdminLayout>
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-4">
                        <p className="font-bold text-[#666]">Order By</p>
                        <div className="flex bg-white p-2 rounded-2xl border gap-x-4">
                            <select className="selection:border-none focus:border-none focus:outline-none bg-white border-none" name="" id="">
                                <option className="" value="">Title</option>
                                <option value="">Category</option>
                                <option value="">Purchased</option>
                                <option value="">Selling</option>
                                <option value="">Offered</option>
                                <option value="">Date</option>
                                <option value="">Status</option>
                            </select>
                        </div>

                        <div className=" px-10 ">
                            <form>
                                <div className="">
                                    <div className="flex space-x-4">
                                        <div className="flex rounded-md overflow-hidden w-full">
                                            <input placeholder="search" type="text" className="w-full rounded-md rounded-r-none px-2" />
                                            <button className="bg-amber-500 primary-btn inline text-white px-6 w-fit hover:w-fit font-semibold py-1 rounded-r-md">Go</button>
                                        </div>
                                        <button className="bg-amber-500 bg-opacity-40 px-6 font-semibold py-2 rounded-md">Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate({pathname:"add"})} className="p-3 rounded-md primary-btn bg-amber-500 text-white font-bold">Add product</button>
                    </div>
                </div>
                <div className="bg-white mt-7 rounded-tl-xl">
                    <Table isPaginationVisible={true} colNames={productTableColumn}>
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                        <ProductTableBody />
                    </Table>
                </div>

            </AdminLayout>
        </>
    );
}


function ProductTableBody() {
    return (
        <TableBody>
            <td className="px-3 flex items-center">
                <img width={"60px"} src="https://cdn.ishop.cholobangla.com/uploads/thumb-product-49-1.webp" alt="" />
                <p>PUMA women's Carina Sneaker</p>
            </td>
            <td className="px-3">
                <div>
                    <p>PUBLIC</p>
                </div>
            </td>
            <td className="px-3">
                <p>Nike</p>
            </td>
            <td className="px-3">
                <p>Default</p>
            </td>
            <td className="px-3">
                <p>90</p>
            </td>
            <td className="px-3">
                <p>110</p>
            </td>
            <td className="px-3">
                <p>110</p>
            </td>
            <td className="px-3">
                <p>2024/05/01</p>
            </td>
            <td className="px-3">
                <button>Reviews</button>
            </td>
            <td className="px-3">
                <button>Edit</button>
            </td>
            <td className="px-3">
                <button>Delete</button>
            </td>
        </TableBody>
    );
}