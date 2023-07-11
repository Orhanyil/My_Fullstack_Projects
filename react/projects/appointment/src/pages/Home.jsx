import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"

const Home = () => {
  return (
    <div>
        <h1>Kristiansand Hospital</h1>
        <h3>Our Docters</h3>
        <Doctors/>
        <AppointmentList/>
    </div>
  )
}

export default Home