const DashboardNavBar = () => {
    return ( 
        <div>
           <div className="d-flex justify-content-between">
           <div>
            <h5 className="text-light">
                Welcome admin
            </h5>
            <p className="text-light">
                Manage everythng from one pace
            </p>
           </div>
           <div>
            <button className="btn btn-dark">
                Logout
            </button>
           </div>
           </div>
        </div>
     );
}
 
export default DashboardNavBar;