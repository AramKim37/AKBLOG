import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} className="w-12 h-12" />
          <span className="font-extrabold text-blue-500">`s BLOG</span>
        </div>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
    </Navbar>
  );
};

export default Header;
