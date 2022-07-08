import { SideBar } from '../../components/Sidebar/SideBar';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="home-container">
        Home
      </div>
    </div>
  )
}
