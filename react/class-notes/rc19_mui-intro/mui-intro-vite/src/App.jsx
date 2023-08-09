
import CardComp from "./components/CardComp"
import TextFieldComp from "./components/TextFieldComp"
import Typo from "./components/Typo"
import AppBarComp from "./components/AppbarComp"
import { createTheme, ThemeProvider } from "@mui/material"
import { deepOrange, deepPurple, lime } from "@mui/material/colors"

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main: "#bbeeeeed",
      },
      secondary:{
        main: deepOrange[500],
      },
      error:{
        main: lime[900],
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      {/*<Typo />
      <TextFieldComp/>*/}

      <AppBarComp/>
      <CardComp/>
      </ThemeProvider>
    </>
  )
}

export default App
