import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "./logo";
import Icons from "./icons";
import { useState } from "react";
const Nav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
    <div className="container-fluid bg-color-ld1 fixed-top">
      <nav className="navbar navbar-expand-md  container  border-bottom px-3">
       <Logo></Logo>
        <button
          className="navbar-toggler color-ld2 border "
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-bs-controls="navbarContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <HiMenuAlt3 />
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse d-md-flex justify-content-end gap-4`}
          id="navbarContent"
          
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link color-ld2" href="#main">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color-ld2" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link color-ld2" href="#projects">
                projects
              </a>
            </li>
          </ul>
          <div className="contact d-flex align-items-center gap-2">
          <Icons></Icons>

            <a className=" color-ld2 border rounded text-decoration-none  p-2 h4 contact-btn" href="#contact">contact us</a>
          </div>

        </div>
      </nav>
      </div>
    </>
  );
};
export default Nav;
