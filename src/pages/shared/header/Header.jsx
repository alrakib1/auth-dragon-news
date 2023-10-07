import moment from "moment";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="font-poppins text-center">
      <img className="mx-auto mt-12 mb-5" src={logo} alt="" />
      <p className="text-lg mb-2 font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-[#706F6F]">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
