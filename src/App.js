
import "./App.css";
import Adminlogin from "./Components/Adminlogin";
import { Route, Routes } from "react-router-dom";
import Referralpage from "./Components/Referralpage";
import Studentpage from "./Components/Studentpage";
import HomePage from "./Components/HomePage";
import RefProfile from "./Components/RefProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/referralpage" element={<Referralpage />}></Route>
        <Route path="/studentpage" element={<Studentpage />}></Route>
        <Route path="/refprofile" element={<RefProfile />}></Route>
        <Route path="/" element={<Adminlogin />}></Route>
      </Routes>
    </>
  );
}

export default App;
