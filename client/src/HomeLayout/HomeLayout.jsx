import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/Resort.png";
import Footer from "../components/Footer.jsx";
import ButtonModal from '../pages/ButtonModal.jsx';

function HomeLayout({ children }) {
  
  return (
    <div className="min-h-[90vh] bg-white  ">
      <header>
        <div className="bg-[#33FF00] h-[35px] w-[100%] text-xl flex justify-center items-center text-black gap-14">
          <div className="flex gap-4 items-center">
            <span>
              <FaPhone />
            </span>{" "}
            <span>+977-0159364</span>
          </div>
          |
          <div className="flex gap-4 items-center">
            <span>
              <FaEnvelope />
            </span>{" "}
            <span>abchotel@gmail.com</span>
          </div>
          |
          <div className="flex gap-4 items-center">
            <span>
              <FaLocationDot />
            </span>{" "}
            <span>Mandikhatar, Kapan</span>
          </div>
        </div>
        <nav className="bg-white-400 h-[64px] flex justify-between self-start items-center px-[200px] bg-[#161616] text-white sticky left-0">
          <div className="flex justify-center r gap-6">
            <img src={logo} />
            <span className=" font-bold text-2xl">Resort</span>
          </div>
          <ul className="flex font-semibold text-xl gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/">Rooms</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ButtonModal/>
          
        </nav>
      </header>
      {children}

      <Footer />
    </div>
  );
}
export default HomeLayout;
