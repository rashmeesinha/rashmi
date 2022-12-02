import "./App.css";
import Desktop from "./components/Desktop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Routes>
          <Route index element={<Desktop />}></Route>
          <Route path="/market" ></Route>
          <Route path="/swap" ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
