import React, { useState, useEffect } from "react";



const Charts = () => {


    return (
        <main>
            <div className="container-fluid">
                {/* START: Breadcrumbs*/}
                <div className="row ">
                    <div className="col-12  align-self-center">
                       
                    </div>
                </div>
                {/* END: Breadcrumbs*/}
                {/* START: Card Data*/}
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Basic Line Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="e-basic-line" className="height-300" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Bar Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="e-basic-bar" className="height-300" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Doughnut Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="e-doughnut-chart" className="height-300" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Bubble Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="e-bubble-chart" className="height-300" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Radar Chart</h4>
                            </div>
                            <div className="card-body">
                                <div id="e-radar-chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Card DATA*/}
            </div>
        </main>


    );
};

export default Charts;

