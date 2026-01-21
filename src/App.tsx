import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Doctors from "./Pages/Doctors"
import AboutUs from "./Pages/AboutUs"
import Signup from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Departments from "./Pages/Departments"
import Eyecare from "./Pages/departments/Eyecare"

const App = () => {
  return (
    <>
    <BrowserRouter basename="/sbhnew">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="doctors" element={<Doctors/>}/>
        <Route path="departments">
            <Route index element={<Departments/>}/>
            <Route path="eyecare" element={<Eyecare/>}/>
        </Route>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App