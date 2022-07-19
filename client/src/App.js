import "./App.scss";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Feed,
  Create,
  SignUp,
  SignIn,
  Settings,
  UserProfile,
} from "./pages";

export const App = () => {
  let theme = ``;

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="create" element={<Create />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="settings" element={<Settings />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
};
