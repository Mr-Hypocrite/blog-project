import "./sidebar.scss";
import {
  DashboardTwoToneIcon,
  DynamicFeedTwoToneIcon,
  EditTwoToneIcon,
  LogoutTwoToneIcon,
  SettingsOutlinedIcon,
} from "../../icons";
import { Link } from "react-router-dom";

export const SideBar = () => {

  let theme = ``;

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
          <Link to="/" className="s-link">
            <LogoutTwoToneIcon className="s-icon" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
