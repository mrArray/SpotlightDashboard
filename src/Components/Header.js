import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Charts = () => {


    return (
        < div id="header-fix" className="header fixed-top" >

        {/* START: Header*/ }
            <nav className="navbar navbar-expand-lg  p-0">
                <div className="navbar-header h4 mb-0 align-self-center d-flex">
                    <a href="index.html" className="horizontal-logo align-self-center d-flex d-lg-none">
                        <img src="dist/images/logo.png" alt="logo" width={23} className="img-fluid" /> <span className="h5 align-self-center mb-0 ">POLLO</span>
                    </a>
                </div>


                <div className="navbar-right ml-auto">
                    <ul className="ml-auto p-0 m-0 list-unstyled d-flex">
                        <li className="mr-1 d-inline-block my-auto d-block d-lg-none">
                            <a href="#" className="nav-link px-2 mobilesearch" data-toggle="dropdown" aria-expanded="false"><i className="icon-magnifier h4" />
                            </a>
                        </li>

                        <li className="dropdown align-self-center mr-1">
                            <Link to="/charts" className="nav-link px-2" ><i className="icon-drawer h4" />
                                <span className="badge badge-default"> <span className="ring">
                                </span><span className="ring-point">
                                    </span> </span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right border  py-0">
                                <li>
                                    
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown align-self-center mr-1">
                            <Link to="/chartssecond" className="nav-link px-2" ><i className="icon-graph h4" />
                                <span className="badge badge-default"> <span className="ring">
                                </span><span className="ring-point">
                                    </span> </span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right border  py-0">
                                <li>

                                </li>
                            </ul>
                        </li>
     
                        <li className="dropdown align-self-center mr-1">
                            <Link to="/chartslast" className="nav-link px-2" ><i className="icon-pie-chart h4" />
                                <span className="badge badge-default"> <span className="ring">
                                </span><span className="ring-point">
                                    </span> </span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right border  py-0">
                                <li>

                                </li>
                            </ul>
                        </li>

                        <li className="dropdown align-self-center mr-1">
                            <Link to="/chartsthird" className="nav-link px-2" ><i className="icon-chart h4" />
                                <span className="badge badge-default"> <span className="ring">
                                </span><span className="ring-point">
                                    </span> </span>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-right border  py-0">
                                <li>

                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
    {/* END: Header*/ }
                    </div >


    );
};

export default Charts;






