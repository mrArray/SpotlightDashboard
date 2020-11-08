import React, { useState, useEffect } from "react";



const Dashboard = () => {


    return (
        <div className="content-wrapper">
                <div>
                    {/* START: Head*/}
                    {/* END Head*/}
                    {/* START: Body*/}
                    {/* START: Pre Loader*/}
                    <div className="se-pre-con">
                        <img src="dist/images/logo.png" alt="logo" width={23} className="img-fluid" />
                    </div>
                    {/* END: Pre Loader*/}
                    
                    
                    {/* START: Main Content*/}
                    <main>
                        <div className="row">
                            <div className="col-12  mt-3">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                    </div>
                                    <div className="card-body">
                                        <div id="world-map-gdp" className="w-100 height-350" style={{ height: 500 }} />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </main>

                    {/* END: Content*/}
                    {/* START: Footer*/}
                    {/* END: Footer*/}
                    {/* START: Back to top*/}
                    <a href="#" className="scrollup text-center">
                        <i className="icon-arrow-up" />
                    </a>
                    {/* END: Back to top*/}
                    {/* END: Body*/}
                </div>

            </div>
    


    );
};

export default Dashboard;

