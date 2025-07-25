import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import logo from "../assets/logo.png";
import { AiOutlineFundProjectionScreen, AiOutlineUser, AiOutlineMail } from "react-icons/ai";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setIsOpen(false);
  };

  const navItems = [
    { id: "about", icon: AiOutlineUser, text: "About", type: "scroll" },
    { id: "project", icon: AiOutlineFundProjectionScreen, text: "Projects", type: "scroll" },
    { path: "/resume", icon: CgFileDocument, text: "Resume", type: "route" },
  ];

  return (
    <nav
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        navColour ? "bg-[#1b1a2ea9] backdrop-blur-lg shadow-xl" : "bg-transparent"
      } w-[95%] max-w-screen-2xl rounded-full`}
    >
      <div className="container mx-auto px-4 xl:px-8 2xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="no-underline flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-24 h-14 md:w-32 md:h-16 hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="no-underline group relative text-white px-4 py-2 text-[16px] lg:text-[18px] font-medium hover:text-purple-300 transition-colors"
                  >
                    <item.icon className="inline mr-2 mb-1" />
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
                  </Link>
                );
              } else {
                return (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="no-underline group relative text-white px-4 py-2 text-[16px] lg:text-[18px] font-medium hover:text-purple-300 transition-colors"
                  >
                    <item.icon className="inline mr-2 mb-1" />
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
                  </a>
                );
              }
            })}

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="no-underline ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white text-sm font-medium flex items-center"
            >
              <AiOutlineMail className="mr-2" size={18} />
              <span className="hidden lg:inline">Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-all duration-300"
          >
            <div className="w-6 h-6 relative flex items-center justify-center text-white">
              <span className={`absolute block h-[2px] w-5 bg-current transform transition-all ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
              <span className={`absolute block h-[2px] w-5 bg-current transition-all ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
              <span className={`absolute block h-[2px] w-5 bg-current transform transition-all ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pb-6 pt-4 space-y-2 bg-[#220f26e6] backdrop-blur-2xl rounded-2xl m-2 mt-4">
            {navItems.map((item, index) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="no-underline flex items-center px-4 py-3 text-white rounded-xl hover:bg-purple-500/20 transition-colors text-base font-medium"
                  >
                    <item.icon className="mr-3" size={20} />
                    {item.text}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="no-underline flex items-center px-4 py-3 text-white rounded-xl hover:bg-purple-500/20 transition-colors text-base font-medium"
                  >
                    <item.icon className="mr-3" size={20} />
                    {item.text}
                  </a>
                );
              }
            })}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="no-underline flex items-center px-4 py-3 text-white rounded-xl hover:bg-purple-500/20 transition-colors text-base font-medium"
            >
              <AiOutlineMail className="mr-3" size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
