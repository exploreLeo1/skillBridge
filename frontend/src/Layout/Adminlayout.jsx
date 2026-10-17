import SideBar from "../components/SideBar";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";

const Adminlayout = () => {
    return (
       <div>
        <div className="d-flex m-3">
            <div
            className="card border-o shadow-sm p-3 me-3"
            style={{
                backgroundColor: "#086288",
                width: "300px",
                minHeight: "90vh"
            }}
            >
                <SideBar />
            </div>
            <div className="flex-grow-1">
                <div
                className="card border-o shadow-sm p-3"
                style={{
                    backgroundColor: "#97D7FF"
                }}
                >
                   <DashboardNavBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
       </div>
      );
}
 
export default Adminlayout;