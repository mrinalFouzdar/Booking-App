import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Hotel from "./hotel/Hotel";
import List from "./list/List";
import "./App.css"
function App() {
  return (
    <div >
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />

      </Routes>
      {/* mrinal */}
    </div>
  );
}

export default App;
