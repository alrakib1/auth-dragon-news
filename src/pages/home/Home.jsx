import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border md:col-span-2">
          <h2 className="text-4xl">news coming soon</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
