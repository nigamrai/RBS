import { Link } from "react-router-dom";
import facebook from "../assets/images/Facebook.png";
import mail from "../assets/images/Gmail.png";
import location from "../assets/images/Google maps.png";
import instagram from "../assets/images/Instagram.png";
import Phone from "../assets/images/Phone.png";
import logo from "../assets/images/Resort.png";
import twitter from "../assets/images/Twitter.png";
function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="px-[200px] bg-[#424740] h-[321px] ">
      <div className="flex justify-between items-center h-[321px]">
        <div className="flex flex-col w-[340px] gap-3">
          <div className="flex  gap-6 text-white">
            <img src={logo} />
            <span className=" font-bold text-2xl">Resort</span>
          </div>
          <p className="text-[12px] ml-[30px]">
            Create Unforgettable Memories: Whether you're looking for adventure,
            relaxation, or a little bit of both, we've got you covered. Choose
            from our range of activities and experiences to create your ideal
            vacation
          </p>
          <div className="flex flex-col gap-3 ml-[30px]">
            <p className="text-2xl text-white font-bold">Follow us on:</p>
            <ul className="flex text-3xl gap-5">
              <li>
                <img src={facebook} />
              </li>
              <li>
                <img src={instagram} />
              </li>
              <li>
                <img src={twitter} />
              </li>
            </ul>
            
          </div>
        </div>
        
        <div className="text-white relative">
       
          <p className="font-bold text-[20px] mb-3">Useful links</p>
          <ul className="text-[12px] flex flex-col gap-3">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
       
        <div className="text-white">
   
          <p className="font-bold text-[20px] mb-3">Contact info</p>
          <ul className="text-[12px]">
            <li className="flex gap-2 mb-2">
              <img src={mail} /><p>abchotel@gmail.com</p>
            </li>
            <li className="flex gap-2 mb-2">
              <img src={location} /><p>Mandikhatar, Kapan</p>
            </li>
            <li className="flex gap-2 mb-2">
              <img src={Phone} /><p>+977-015267089</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[-30px] text-center">@copyright {currentYear}. All rights reserved</div>
    </footer>
     
  );
}
export default Footer;
