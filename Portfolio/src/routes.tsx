import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/projects' element={ <Projects /> } />
    </Routes>
  )
}
