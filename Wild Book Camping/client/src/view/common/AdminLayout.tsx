import MultiLevelSidebar from "../AdminComponent/multilevel-sidebar.component";
import TopMenuBar from "../AdminComponent/top-menubar.component";


interface Props {
    children?: any
}

export default function AdminLayout(prop: Props) {
    return (
        <>
            <div className="flex">
                <div>
                    <MultiLevelSidebar />
                </div>
                <div className=" bg-[#797B6E] bg-opacity-20 w-screen border-b-2 flex-row h-screen overflow-y-scroll">
                    <TopMenuBar />
                    <div className="p-5">
                        {prop.children}
                    </div>
                    
                </div>

            </div>
        </>
    );
}