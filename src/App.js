import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Mens from "./components/Mens/Mens";
import Women from "./components/womens/Women";
import Kids from "./components/Kids/Kids";
import Signin from "./components/Signin/Signin";
import Footer from "./components/Footer/Footer";



function App(){
  return(
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Mens' element={<Mens />} />
      <Route path='/Women' element={<Women />} />
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/Signin' element={<Signin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    
   </div>
  )
}
export default App;


