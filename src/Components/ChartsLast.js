

import React, { useState, useEffect } from "react";



const ChartsThird = () => {


    return (
        <main>
            <div className="container-fluid">
                {/* START: Breadcrumbs*/}
                <div className="row ">
                    <div className="col-12  align-self-center">
                        <div className="sub-header mt-3 py-3 px-3 align-self-center d-sm-flex w-100 rounded">
                            <div className="w-sm-100 mr-auto"><h4 className="mb-0">amCharts Chart</h4></div>
                            <ol className="breadcrumb bg-transparent align-self-center m-0 p-0">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item">Chart</li>
                                <li className="breadcrumb-item active"><a href="#">amCharts</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* END: Breadcrumbs*/}
                {/* START: Card Data*/}
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Donut with radial gradient</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_gradient" className="height-350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Animated Time-Line Pie Chart</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_animated_time_line" className="height-350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">3D Pie Chart</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_3d" className="height-350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Pie chart with broken down slices</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_broken_down" className="height-350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Variable Radius Pie Chart</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_radius_chart" className="height-350" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Variable-height 3D Pie Chart</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="pie_variable_height_3d" className="height-350" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Card DATA*/}
            </div>
        </main>


    );
};

export default ChartsThird;





















