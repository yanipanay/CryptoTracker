import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coinpage from "./pages/Coinpage";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/coin/:id" element={<Coinpage></Coinpage>}></Route>
          <Route path="/compare" element={<ComparePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
