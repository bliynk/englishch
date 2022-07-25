import "./App.css";
import ImportAllComponents from "./Components/ImportAllComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginPage from "./Components/LoginPage/LoginPage";
import Customers from "./Components/Customers/Customers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" extract element={<ImportAllComponents />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
