import ImageUpload from "../../AdminComponent/formComponent/image-upload.component";
import { CheckBox, DropDown, RadioButton, TextInputWithLabel } from "../../AdminComponent/formComponent/input.component";
import TextEditor from "../../AdminComponent/text-editor.component";
import AdminLayout from "../../common/AdminLayout";

export default function AdminAddProduct() {
    return (
        <>
            <AdminLayout>
                <div className="flex justify-center">
                    <div className="lg:w-1/2 bg-white p-10 border rounded-xl">
                        <h4 className="text-xl">Add Product</h4>
                        <hr className="mt-5" />
                        <TextInputWithLabel labelName="Title" gap="py-3" />

                        <div className="flex gap-x-5">
                            <TextInputWithLabel labelName="Categories" gap="py-3" />
                            <TextInputWithLabel labelName="Unit Price" gap="py-3" />
                        </div>
                        <div className="py-3 h-64 mt-10">
                            <p>Description</p>
                            <TextEditor />
                        </div>

                            <div className="flex justify-end gap-3">
                            <button className="primary-btn bg-amber-500 bg-opacity-45 text-black p-3 rounded-md w-fit hover:w-fit font-semibold">Save & Edit</button>
                                <button className="primary-btn bg-amber-500 text-white font-bold text-xl p-3 mx-5 rounded-md w-fit hover:w-fit">Save</button>
                            </div>

                    </div>
                    <div className=" bg-white p-5 border rounded-xl">
                        <div>
                            <label htmlFor="">Upload image</label>
                            <ImageUpload />
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}