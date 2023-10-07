import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/images/qZone1.png'
import qZone2 from '../../../assets/images/qZone2.png'
import qZone3 from '../../../assets/images/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">log in with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4 font-semibold">Find Us On</h2>
        <a className="flex p-4 items-center text-lg border rounded-t-lg" href="">
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="flex p-4 items-center text-lg border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="flex p-4 items-center text-lg border rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl font-semibold">Q zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
