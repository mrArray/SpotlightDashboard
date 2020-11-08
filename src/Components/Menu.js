import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Charts = () => {


    return (

        < div className="sidebar" >
        {/* START: Main Menu*/ }
            <a href="#" className="sidebarCollapse float-right h6 dropdown-menu-right mr-2 mt-2 position-absolute d-block d-lg-none">
                <i className="icon-close" />
            </a>
    {/* START: Logo*/ }
    <Link to="/dashboard" className="sidebar-logo d-flex">
        <img src="dist/images/logo.png" alt="logo" width={100} className="h5 align-self-center mb-0" />
    </Link>
    {/* END: Logo*/ }
    {/* START: Menu*/ }
    <ul id="side-menu" className="sidebar-menu">
        <li className="dropdown"><a href="#">
            <i className="" /> <img src="dist/images/SDG-1.png" alt className="d-flex mr-3 img-fluid rounded-square" /> CRA</a>
            <div>
                <ul>
                    <ul>
                        <br />
                        <br />

                        <br />
                        <br />
                        <br />
                        <br />

                        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                        <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                        <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                        <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                    </ul>
                </ul>
            </div>
        </li>
                <li className="dropdown"><a href="#" className="text-danger"><i className="" /><i className="" /> <img src="dist/images/disability.png" alt className="d-flex mr-3 img-fluid rounded-square" />DISABILITY<span className="ml-2 badge badge-danger"></span></a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
                <li className="dropdown"><a href="#" className="text-danger"><i className="" /><i className="" /> <img src="dist/images/SDG-5.png" alt className="d-flex mr-3 img-fluid rounded-square" />INCIDENCES<span className="ml-2 badge badge-danger"></span></a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        <li className=""><a href="#"><i className="" /> <img src="dist/images/contacts.png" alt className="d-flex mr-3 img-fluid rounded-square" />
CONTACTS </a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-8.png" alt className="d-flex mr-3 img-fluid rounded-square" />
       SHELTERS </a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-6.png" alt className="d-flex mr-3 img-fluid rounded-square" />
SACS</a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-7.png" alt className="d-flex mr-3 img-fluid rounded-square" />GBB</a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-3.png" alt className="d-flex mr-3 img-fluid rounded-square" />VAB</a>
            <div>
                <ul>
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />

                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                </ul>
            </div>
        </li>
        
       
       
       
        
       
    </ul>
    {/* END: Menu*/ }
    {/* END: Main Menu*/ }
            

        </div >


    );
};

export default Charts;






