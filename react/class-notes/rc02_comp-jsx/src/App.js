import Content from "./Content"
import { Footer } from "./Footer"
import Header from "./Header"
import "./App.css"

function App() {
  const newStyle = {
    fontFamily: "tohamo",
    fontSize: "1.1rem",
    color: "red",
  }
  return (
    <div>
      <h1 style={newStyle}>Hello React</h1>
      <Header/>
      <Footer/>
      <Content/>

      <h3>BU BIR H3 ELEMENTTIR</h3>
    </div>
  )
}

export default App
