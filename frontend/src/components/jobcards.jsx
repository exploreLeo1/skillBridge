
import {  Link } from "react-router-dom";

const JobCards = ({allJobs}) => {

  

    return (
        <div>
            <div className="row">
                {
                    allJobs.map((job) => {
                        return (
                            <div className="col-md-4 mb-2" key={job.id}>
                                <div className="card p-3 border-0 shadow-sm" key={job.id}>
                                    <div className="d-flex justify-content-between fw-bold" >
                                        <h5>{job.title}</h5>
                                        <p className="text-danger">{job.discretion}</p>
                                    </div>
                                    <p className="text-primary fw-semibold">{job.title}</p>
                                    <p>
                                        {job.description.slice(0, 70)}...
                                    </p>

                                    <span className="border-bottom my-2" />
                                    <div className="d-flex justify-content-between">
                                        <p>View opportunity</p>
                                        <Link className="btn btn-primary btn-small rounded-pill p-2"
                                        to={`/jobs/${job.id}`}
                                        >
                                        More Details

                                        </Link>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default JobCards;