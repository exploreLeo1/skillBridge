import useFetch from "../../hook/useFetch.js"
import JobCards from "../../components/jobcards";



const Jobsection = () => {

     const {allData: jobs, erroe, loading}  = useFetch("http://localhost:3000/jobs");
    

    return (
        <div>
            <div className="container my-3">
                <h4 className="text-center">
              Latest <span className="border-bottom border-primary border-3 ">Job</span>Vacancies
                </h4>
                <p className="text-center">
                    We have a wide range of jobs, click me to apply
                </p>
             <JobCards allJobs={jobs?.filter((job)=>job.discretion === "contract") } />
                <h4 className="my-3 text-center">
                    More jobs from our end
                </h4>
                <JobCards allJobs={jobs} />

            </div>
        </div>
    );
}

export default Jobsection;