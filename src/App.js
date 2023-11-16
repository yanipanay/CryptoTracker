import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coinpage from "./pages/Coinpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/coin/:id" element={<Coinpage></Coinpage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
