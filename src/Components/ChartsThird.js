import React, { useState, useEffect } from "react";



const ChartsThird = () => {


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
                                <h4 className="card-title">Incidence</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_line_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Intervention</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_area_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">GBV Responses</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_column_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Country Coverage</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_bar_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Sexual Asualt  Referral center</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_mixed_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">No. of Cases Charge to Court</h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_candlestick_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title"></h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_pie_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Voilence Against Person Prohibition </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_donut_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Child right law </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_radar_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Safe House/Shelters </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_radial_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">No of Case Reported </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_bubble_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">No of Trails Concluded </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_scatter_chart" className="height-500" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Child Right </h4>
                            </div>
                            <div className="card-body text-center">
                                <div id="apex_heatmap_chart" className="height-500" />
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

