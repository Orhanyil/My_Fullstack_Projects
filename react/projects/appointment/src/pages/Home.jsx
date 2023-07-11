import AddModal from "../components/AddModal"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData, doctorData } from "../helpers/data"

const Home = () => {
  return (
    <div>
        <h1>Kristiansand Hospital</h1>
        <h3>Our Docters</h3>
        {doctorData.map((item) => (
        <Doctors key={item.id} {...item} />
      ))}
        <AddModal/>
        <div><h3>Appointment List</h3></div>
        {appointmentData.map((item) => (
        <AppointmentList key={item.id} {...item} />
      ))}
      
       
    </div>
  )
}

export default Home