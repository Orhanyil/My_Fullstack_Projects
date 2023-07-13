import React, { useState, useEffect } from 'react'

const User = () => {

    const [userData, setUserData] = useState("")

    const getUser = () => {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
       .then((data) => setUserData(data.results[0]))
       .catch((err) => console.log(err))
    }

  
    useEffect(() => {

    //!componentDidMount asamasi

    
     getUser()

     
    }, [])
    
  console.log(userData)
  //!return kismi render kismi yani DOM a basilacak yerdir.

  //!componentWillUnmount asamasi
  return (
    <div>
      <img src={userData?.picture?.large} className='rounded-circle' alt="img" />
      <h4>Hi! My name is </h4>
      <h1>{userData?.name?.first} {userData?.name?.last}</h1>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("no-NO")}</h4>
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}/{userData?.location?.country}</h6>

      <button className="btn btn-success" onClick={getUser}>Get Random User</button>
    </div>
  )
}

export default User