import { ProfileBar, SearchBar, SideBar } from "../../components/";
import "./home.scss";

export const Home = () => {
  // let screenWidth;
  // window.onload = () => {
  //   screenWidth = window.innerWidth;
  //   console.log(screenWidth);
  // };

  return (
    <>
      <div className="home">
        <SideBar />
        <div className="home-container">
          <SearchBar />
          <section id="article-of-day" className="article-of-day">
            <div className="flex-in-between">
              <h1 className="title">Article of The Day</h1>
              <div className="std-btn">View More</div>
            </div>

            <div className="img-container">
              <div className="text-container">
                <h1 className="title">
                  How To Become Super Standout 3D NFT Artist
                </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum pariatur dicta provident quibusdam sed.
                </p>
                <button className="std-btn">
                  Read More
                </button>
              </div>
            </div>
          </section>
          <section id="match-for-you" className="match-for-you"></section>
          <div className="abc"></div>
        </div>
        <ProfileBar />
      </div>
    </>
  );
};
