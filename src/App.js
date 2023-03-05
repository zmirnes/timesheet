import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Routes>
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
