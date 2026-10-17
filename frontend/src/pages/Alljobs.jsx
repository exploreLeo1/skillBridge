import JobCards from "../components/jobcards.jsx";
import useFetch from "../hook/useFetch.JS";

const AllJobsPage = () => {
    const {allData: jobs, error, loading} = useFetch("  http://localhost:3000/jobs");
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    {/* Sidebar / Filters Column */}
                    <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="company" className="mb-2">
                                        Search by Company Name or Job
                                    </label>
                                    <input
                                        type="text" 
                                        className="form-control"
                                        placeholder="Enter keyword..."
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company" className="mb-2">
                                        Search by Location
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Location..."
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Main Content Column */}
                    <div className="col-md-8">
                        <div className="card border-0 shadow-sm p-3">
                            <JobCards allJobs={jobs} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobsPage;