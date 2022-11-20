import { useState } from "react"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { Menu } from "./Components/Menu/Menu"
import { AppProvider } from "./context/context"

function App() {

  return (
    <AppProvider>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </AppProvider>

  )
}

export default App
