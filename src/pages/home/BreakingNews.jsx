import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="font-poppins">
      <div className="flex bg-[#F3F3F3] mt-7">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100} className="cursor-pointer text-[#403F3F] text-lg font-semibold">
        <Link className="mr-12" to='/news'>Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12" to='/news'>Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12" to='/news'>Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-12" to='/news'>Match Highlights: Germany vs Spain — as it happened !</Link>
      </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
