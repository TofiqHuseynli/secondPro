import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Employers from "./pages/Employers";

function App() {
  return (

  
   
    <div>

    <Navbar/>
      
      <Routes>
        <Route path='/home' element ={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/eployers" element={<Employers/>}></Route>
      </Routes>

     
      
    
    </div>
    
  );
}

export default App;
