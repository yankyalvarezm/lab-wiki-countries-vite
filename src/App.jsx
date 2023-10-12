import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes className="app-content">
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
