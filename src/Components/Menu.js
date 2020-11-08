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
    <Link href="/dashboard" className="sidebar-logo d-flex">
        <img src="dist/images/logo.png" alt="logo" width={100} className="h5 align-self-center mb-0" />
    </Link>
    {/* END: Logo*/ }
    {/* START: Menu*/ }
    <ul id="side-menu" className="sidebar-menu">
        <li className="dropdown"><a href="#">
            <i className="" /> <img src="dist/images/SDG-1.png" alt className="d-flex mr-3 img-fluid rounded-square" />                INCIDENCES</a>
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
        <li className="dropdown"><a href="#" className="text-danger"><i className="" /><i className="" /> <img src="dist/images/SDG-2.png" alt className="d-flex mr-3 img-fluid rounded-square" />VAB<span className="ml-2 badge badge-danger"></span></a>
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
        <li className="dropdown"><a href="#" className="text-danger"><i className="" /><i className="" /> <img src="dist/images/SDG-3.png" alt className="d-flex mr-3 img-fluid rounded-square" />VAB<span className="ml-2 badge badge-danger"></span></a>
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
        <li className=""><a href="#"><i className="" /> <img src="dist/images/SDG-4.png" alt className="d-flex mr-3 img-fluid rounded-square" />
DISABILITY </a>
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
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-5.png" alt className="d-flex mr-3 img-fluid rounded-square" />
        </a>
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
        <li className="dropdown"><a href="#"><i className="" /><img src="dist/images/SDG-8.png" alt className="d-flex mr-3 img-fluid rounded-square" />SHELTERS</a>
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
        <li className="dropdown"><a href="#"><i className="icon-book-open" />POLICIES</a>
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
        <li className="dropdown"><a href="#"><i className="icon-badge" />DOCUMENTS</a>
            <div>
                <ul>
                    <li><a href="icon-materialdesign.html"><i className="icon-star" /> Material Icon</a></li>
                    <li><a href="icon-font-awesome.html"><i className="icon-screen-tablet" /> Font-awesome</a></li>
                    <li><a href="icon-themify.html"><i className="icon-plane" /> Themify Icon</a></li>
                    <li><a href="icon-weather.html"><i className="icon-drawer" /> Weather Icon</a></li>
                    <li><a href="icon-simple-line.html"><i className="icon-map" /> Simple Line Icon</a></li>
                    <li><a href="icon-flag.html"><i className="icon-flag" /> Flag Icon</a></li>
                    <li><a href="icon-ionicons.html"><i className="icon-rocket" /> Ionicons Icon</a></li>
                    <li><a href="icon-icofont.html"><i className="icon-fire" /> Icofont Icon</a></li>
                    <li><a href="icon-linearicons.html"><i className="icon-list" /> Linear</a></li>
                    <li><a href="icon-crypto.html"><i className="icon-diamond" /> Crypto</a></li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="icon-user" />Profile</a>
            <div>
                <ul>
                    <li><a href="user-contact-list.html"><i className="icon-people" /> Contact List</a></li>
                    <li><a href="user-contact-grid.html"><i className="icon-cursor-move" /> Contact Grid</a></li>
                    <li><a href="user-profile.html"><i className="icon-user" /> User Profile</a></li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="icon-map" />Map</a>
            <div>
                <ul>
                    <li><a href="map-google.html"><i className="icon-map" /> Google Map</a></li>
                    <li><a href="map-vector.html"><i className="icon-vector" /> Vector Map</a></li>
                </ul>
            </div>
        </li>
        <li className="dropdown"><a href="#"><i className="icon-pencil" />Blog</a>
            <div>
                <ul>
                    <li><a href="blog-list.html"><i className="icon-plus" /> Blog List</a></li>
                    <li><a href="blog-single.html"><i className="icon-tag" /> Blog Post</a></li>
                </ul>
            </div>
        </li>
        <li><a href="calendar.html"><i className="icon-calendar" />Calendar</a>
        </li>
        <li className="dropdown"><a href="#"><i className="icon-bag" />Ecommerce</a>
            <div>
                <ul>
                    <li><a href="ecommerce-product-list.html"><i className="icon-grid" /> Products List</a></li>
                    <li><a href="ecommerce-product-detail.html"><i className="icon-plus" /> Product Detail</a></li>
                    <li><a href="ecommerce-cart.html"><i className="icon-badge" /> Cart</a></li>
                    <li><a href="ecommerce-checkout.html"><i className="icon-plus" /> Checkout</a></li>
                    <li><a href="ecommerce-orders.html"><i className="icon-basket" /> Orders</a></li>
                    <li><a href="ecommerce-order-view.html"><i className="icon-equalizer" /> Order View</a></li>
                    <li><a href="ecommerce-order-invoice.html"><i className="icon-notebook" /> Invoice</a></li>
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






