import "bootstrap/dist/css/bootstrap.min.css"

import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import AllJobsPage from "./pages/alljobs"
import JobDetails from "./pages/JobDetails"
import Publiclayout from "./Layout/publiclayout" ;
import Adminlayout from "./Layout/adminlayout"
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import AdminEmployers from "./pages/admin/AdminEmployers.jsx"
import AdminJobSeekers from "./pages/admin/AdminJobSeekers.jsx"
import AdminJobs from "./pages/admin/AdminJobs.jsx"
import AdminSettings from "./pages/admin/AdminSettings.jsx"



function App() {

  return (
    <div>

      <Routes>
        {/* Public routes */}
        <Route element={<Publiclayout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/all-jobs" element={<AllJobsPage />} />
          <Route path="/Jobs/:id" element={<JobDetails />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<Adminlayout />}>
        <Route  index element={<AdminDashboard /> }/>
        <Route path="employers" element={<AdminEmployers />} />
        <Route path="job-seekers" element={<AdminJobSeekers />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="settings" element={<AdminSettings />} />

        </Route>

        {/* Employer routes */}
        <Route>

        </Route>

        {/* Job seeker route */}
        <Route>

        </Route>


      </Routes>

    </div >
  )
}

export default App
