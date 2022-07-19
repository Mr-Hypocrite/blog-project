import "./sidebar.scss";
import {
  DashboardTwoToneIcon,
  DynamicFeedTwoToneIcon,
  EditTwoToneIcon,
  LogoutTwoToneIcon,
  SettingsOutlinedIcon,
} from "../../icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const SideBar = () => {
  let theme = ``;

  const [logout, setLogout] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (logout) {
      dispatch({ type: "LOGOUT" });
    }
  }, [logout, dispatch]);

  return (
    <div className={`sidebar ${theme}`}>
      <Link to="/" className="logo">
        <div className="left"></div>
        <div className="right"></div>
      </Link>
      <div className="sidebar-links">
        <Link to="/" className="s-link">
          <DashboardTwoToneIcon className="s-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/feed" className="s-link">
          <DynamicFeedTwoToneIcon className="s-icon" />
          <span>Feed</span>
        </Link>
        <Link to="/create" className="s-link">
          <EditTwoToneIcon className="s-icon" />
          <span>Create</span>
        </Link>
        <div className="s-bottom">
          <Link to="/settings" className="s-link">
            <SettingsOutlinedIcon className="s-icon" />
            <span>Settings</span>
          </Link>
          {user && <div className="s-link" onClick={() => setLogout(true)}>
            <LogoutTwoToneIcon className="s-icon" />
            <span>Logout</span>
          </div>}
        </div>
      </div>
    </div>
  );
};
