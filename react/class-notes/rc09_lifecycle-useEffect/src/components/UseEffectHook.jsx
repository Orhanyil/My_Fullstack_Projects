import { useState, useEffect } from "react"

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

//   useEffect(() => {
//     //? componentDidMount (Dependency Array bos ise)
//     //? componentDidMount + componentDidUpdate (Dependency array bos degilse)
//     //? Dependecny array'Deki state her degistiginde veya ilk render sonrasi bu kod blogu tekrardan calistirilir.

//     return () => {
//       //? Cleanup function (componentWillUnmount)
//     }
//   }, [count]) //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    //! fetch, async-await, localStorage, setTimeOut, setInvertal(); kullanilabilir
    console.log("componentDidMount + componentDidUpdate");
    setTimeout(()=>{
      alert("Data fetched")
    }, 1000)

  }, [count]); //? count state'i her degistiginde yukaridaki mount+update kismi calistirilir.
              //? Update i kullanirken dikkatli olmaliyiz cunku sonsuz donguye girme riski vardir.
              //? Update her renderden sonra calisir. sonsuz donguye girerse "count" u hemen silip sonsuz donguyu durdurmaliyiz. 

  
  const fetchData = () => {
    console.log("Data Fetch started")
  }

  useEffect(() => {
      const timer = setInterval(fetchData, 1000)
    return () => {
          clearInterval(timer)
          console.log("componentWillUNmount")
    }
  }, []);

  const handleInc = () => {
    setCount(count + 1)
  }
  console.log("render");
  return (
    <div className="container text-center">
      <h1 className="text-danger">USEEFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={handleInc}>
        INC
      </button>
    </div>
  )
}

export default UseEffectHook
