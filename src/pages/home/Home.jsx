import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className="md:col-span-2">
          <h2 className="text-4xl">
            {
              news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
            }
          </h2>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
