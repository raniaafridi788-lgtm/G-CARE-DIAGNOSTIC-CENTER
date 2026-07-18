import FAQ from "./Home/FAQ"
import PatientTestimonials from "./Home/PatientTestimonials"
import Services from "./Services/Services"
import ServicesOurview from "./Services/ServicesOurview"
import ServicePage from "./Services/ServicePage"
import { Routes, Route} from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs"
import PatientAppointmentForm from "./Services/Form"
import InternshipForm from "./Internship/InternshipForm"

function App() {
 

  return (
    <>
  {/*  <FAQ/>
  <PatientTestimonials/>  */}
    {/* <Routes>
  <Route path="/" element={<Services />} />
  <Route path="/services/:slug" element={<ServicesOurview />} />
  <Route path="/book" element={<PatientAppointmentForm />} />
  <Route path="/contact" element={<ContactUs />} />
</Routes> */}

<InternshipForm/>
   
    </>
  )
}

export default App
