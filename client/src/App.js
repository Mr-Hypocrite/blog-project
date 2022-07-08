import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};