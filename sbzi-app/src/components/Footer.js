import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export const Footer = () => {
    return (
        <>
        
            <footer className="text-center text-lg-start bg-white text-muted">
                <hr/>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Company name
                                </h6>
                                <p>This is a new Website made by me</p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Imported</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Fruits</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Veggies</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> South Extension, New Delhi</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    rajender.rawat4@gmail.com
                                </p>
                                <p><i className="fas fa-print me-3 text-secondary"></i> +91 9650464149</p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 912345678</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3" style={{backgroundColor:"black"}}>
                <b style={{color:'white'}}>© 2023 Copyright: Rajender Singh Rawat</b>
                </div>
                
            </footer>
        </>
    )
}
