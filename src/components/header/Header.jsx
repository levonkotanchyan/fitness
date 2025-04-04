import "./header.scss";
import logo from "../../images/logo.png";
import Menu from "../../menu/Menu";
import { isMobile } from "react-device-detect";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";

const MobileViewHeader = () => {
  return (
    <HamburgerMenu />
  );
};

const LaptopViewHeader = () => {
  return (
    <>
      <Menu />
      <div className="auth">
        <button className="log-btn">Login</button>
        <button className="sign-btn">Sign Up</button>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      {isMobile ? <MobileViewHeader /> : <LaptopViewHeader />}
    </div>
  );
};

export default Header;
