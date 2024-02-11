import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import LoginPage1 from "./test";
import Team from "./Team";
import Projects from "./Projects";
import Calendar from "./Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage1 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
