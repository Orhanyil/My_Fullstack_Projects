import axios from "axios"
//import {toastErrorNotify, toastSuccessNotify} from ""

export const login = async(userData) => {
    const BASE_URL ="https://14103.fullstack.clarusway.com"
    try {
     const {data} = await axios.post(`${BASE_URL}/account/auth/login/`, userData)
        console.log(data)
        //toastSuccessNotify("Login is success")
    } catch (error) {
        console.log(error)
    }

}