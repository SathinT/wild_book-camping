import BarChart from "../../AdminComponent/bar-chart.component";
import InfoCard from "../../AdminComponent/info-card.component";
import OrderStatistics from "../../AdminComponent/order-static.component";
import AdminLayout from "../../common/AdminLayout";

export default function AdminDashboard(){
    return(
        <>
            <AdminLayout>
                <div className="flex justify-between gap-5">
                    <InfoCard withbackGroudStyle={true} cardName="Total products" cardValue={"5"} cardColor="bg-[#D67F00]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total orders" cardValue={"5"} cardColor="bg-[#D67F00]"/>
                    <InfoCard withbackGroudStyle={true} cardName="Total customers" cardValue={"5"} cardColor="bg-[#D67F00]"/>
                </div>
                <div>
                    <OrderStatistics />
                </div>
            </AdminLayout>
        </>
    );
}