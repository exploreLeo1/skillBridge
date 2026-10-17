const Footer = () => {
    return (
        <div>
            <div className="container-fluid text-light mt-3 bg-dark">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>
                                skill<span className="text-primary">Bridge</span>
                            </h5>
                            <p>
                                You need a job, we have it, you need talent we can provide it
                            </p>
                        </div>
                          <div className="col-md-3">
                            <h5>
                                PRODUCT
                            </h5>
                            <p>
                                Remote jobs
                            </p>
                            <p>Contract</p>
                            <p>Tasks</p>
                        </div>
                          <div className="col-md-3">
                            <h5>
                                COMPANY
                            </h5>
                            <p>About us</p>
                            <p>Contact us</p>
                            <p>Career tips</p>
                        </div>
                         <div className="col-md-3">
                            <h5>
                                RESOURCE
                            </h5>
                            <p>FAQ</p>
                            <p>Privacy policy</p>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer;