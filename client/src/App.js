import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home, Feed, Create } from "./pages";

export const App = () => {
  let theme = ``;

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
};
