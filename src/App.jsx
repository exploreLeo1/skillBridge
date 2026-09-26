import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Home/Homepage"

function App() {

  return (
    <div>
       <Navbar />
       <Homepage/>
       <Footer />
    </div>
  )
}

export default App
