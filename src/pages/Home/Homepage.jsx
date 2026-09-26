
import { FaClipboardCheck } from "react-icons/fa";import HeroSection from "./HomeSections/HeroSection";

const Homepage = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4">
                            Shaping your<br/> future with the <br/>best recruitment
                        </h1>
                        <p className="my-2 fs-5 text-muted">
                            Growth and success go hand in hand. <br/>
                            We will help you with it. Focus to get your dream job

                        </p>
                        <div className="input-group input-group-sm w-50">
                            <input type="text" className="form-control "/>

                            <button className="btn btn-primary">Get Notification</button>
                        </div>
                        {/* icons */}
                        <h6>
                            <span className="text-primary me-2"><FaClipboardCheck /></span>
                            Update Everyday
                        </h6>
                        <h6> <span className="text-primary me-2"><FaClipboardCheck /></span>Easy Application </h6>
                        <h6> <span className="text-primary me-2"><FaClipboardCheck /></span>Land your job</h6>

                    </div>
                    {/* right side */}
                    <div className="col-md-6">
                        <img
                            src="images/Heroimage.jpg"
                            alt="job-search-image"
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover"
                            }}
                            className="rounded-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;