import { useParams} from "react-router-dom";
import useFetch from "../hook/useFetch.js";
const JobDetails = () => {

    const { id } = useParams();
    const {allData: job, erroe, loading } = useFetch(`http://localhost:3000/jobs/${id}`);

    return ( 
        <div>
            <div className="container my-3">
            <h5> {job.title}</h5>
            <h6> {job.company}</h6>
            <p> {job.discretion}</p>
            <p> {job.description}</p>
            </div>
        </div>
     );
}
 
export default JobDetails;