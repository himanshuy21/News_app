import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Sports } from "./Components/Sport";
import { Business } from "./Components/Business";
import { Politics, Technology } from "./Components/Technology";
import { Health } from "./Components/Health";
import { Science } from "./Components/Science";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/sports" element={<Sports />}></Route>
        <Route exact path="/business" element={<Business />}></Route>
        <Route exact path="/technology" element={<Technology />}></Route>
        <Route exact path="/health" element={<Health />}></Route>
        <Route exact path="/science" element={<Science />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
