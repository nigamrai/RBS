import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/Man.png';
import Signin from './Signin.jsx';


function ButtonModal(){
    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn);
 return <div>
       {!isLoggedIn ? (
        <Signin/>
      ) : (
        <div className="flex gap-3 font-semibold text-[15px] items-center ">
          <Link to="/">
            <img src={avatar} />
          </Link>
          <Link to="/">
            <button className="bg-[#33FF00] w-[125px] h-[30px] rounded-[20px]">
              Your Bookings
            </button>
          </Link>
        </div>
      )}
 </div>
}
export default ButtonModal;