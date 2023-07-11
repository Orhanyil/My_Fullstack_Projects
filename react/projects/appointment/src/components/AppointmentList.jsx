import Stack from 'react-bootstrap/Stack';


const AppointmentList = ({ id, day, patient, consulted, doctor }) => {
  return (
    
    <div>
                
        <Stack direction="horizontal" className='d-flex justify-content-around bg-secondary text-light mb-2 mx-2' gap={3}>
            <div>
                <div className="p-2">Patient Name</div>
                <div className="p-2">Docter Name</div>
            </div>
            <div>
                <div className="p-2 ms-auto">Consulted</div>
                <div className="p-2 ms-auto">date</div>
                <div className="p-2 ms-auto">time</div>
            </div>
            <div>
                <div className="p-2">Delete icon</div>
            </div>
            
            
        </Stack>
        
  </div>
  )
}

export default AppointmentList;


