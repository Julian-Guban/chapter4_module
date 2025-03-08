import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lesson1 from "./Pages/Lesson1";
import Lesson2 from "./Pages/Lesson2";
import Lesson3 from "./Pages/Lesson3";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path={"/l1"} element={<Lesson1 />} />
          <Route path={"/l2"} element={<Lesson2 />} />
          <Route path={"/l3"} element={<Lesson3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
