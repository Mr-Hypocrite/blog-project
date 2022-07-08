import "./sidebar.scss";
import { DashboardTwoToneIcon, DynamicFeedTwoToneIcon, EditTwoToneIcon, LogoutTwoToneIcon, SettingsOutlinedIcon } from "../../icons";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <ul className="sidebar-links">
        <li className="s-link">
          <DashboardTwoToneIcon className="s-icon" />
          <span>Dashboard</span>
        </li>
        <li className="s-link">
          <DynamicFeedTwoToneIcon className="s-icon" />
          <span>Feed</span>
        </li>
        <li className="s-link">
          <EditTwoToneIcon className="s-icon" />
          <span>Create Blog</span>
        </li>
        <li className="s-link">
          <SettingsOutlinedIcon className="s-icon" />
          <span>Settings</span>
        </li>
        <li className="s-link">
          <LogoutTwoToneIcon className="s-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};
