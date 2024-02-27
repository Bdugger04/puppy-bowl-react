import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return;
  <main>
    <h1>Home Page</h1>
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/form" element={<NewPlayerForm />} />
      <Route path="/players/:id" element={<SinglePlayer />} />
    </Routes>
  </main>;
}

export default App;
