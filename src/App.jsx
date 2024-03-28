import Navbar from "./components/Navbar";

import {Routes,Route} from "react-router-dom"
import Signin from "./pages/Signin"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Signin" element = {<Signin/>}/>

      
        </Routes>        
      </div>
    </>
  );
};

export default App;
