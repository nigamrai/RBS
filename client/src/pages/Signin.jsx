import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/slices/authSlice";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confimPassword: "",
    citizenshipImage: "",
  });
  function switchLoginState(e) {
    e.preventDefault();
    setLoginState(!loginState);
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    {loginState?setLoginData({
      ...loginData,
      [name]: value,
    }):setSignupData({
      ...signupData,
      [name]:value
    })}
  }
  async function onLogin(e) {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("All fields are required");
      return;
    }
    if (!loginData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      toast.error("Invalid Email");
      return;
    }
    if (
      !loginData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      toast.error(
        "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
      );
      return;
    }
    const response = await dispatch(userLogin(loginData));
    if (response?.payload?.success) {
      console.log("Nigam");
      setLoginData({
        email: "",
        password: "",
      });
      navigate("/about");
    }
  }
  function createNewAccount(e) {
    e.preventDefault();
    if(!signupData.fullName||!signupData.email||!signupData.password||!signupData.mobileNumber||!signupData.confimPassword){
      toast.error('All fields are required');
      return;
    }
    if(!signupData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      toast.error("Email format not valid");
      return;
    }
    if(!signupData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      toast.error("Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:");
      return;
    }
    if(signupData.password!=signupData.confimPassword){
      toast.error("Password and confirm password does not match");
      return;
    }
    if(!signupData.mobileNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)){
      toast.error("Phone number format is not valid");
      return;
    }
    
  }
        
  return (
    <div className="flex gap-3 font-semibold text-[15px] items-center ">
      <button
        className="bg-[#33FF00] w-[78px] h-[30px] rounded-[20px]"
        onClick={() => document.getElementById("loginAndSignup").showModal()}
      >
        Login
      </button>
      <dialog id="loginAndSignup" className="bg-white p-0">
        <div className="modal-box h-full w-full bg-white m-0">
          <form method="dialog" className="modal-backdrop">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black text-xl">
              ✕
            </button>
          </form>

          <form
            noValidate
            className="text-black flex flex-col justify-center items-center font-semibold gap-4"
            onSubmit={loginState ? onLogin : createNewAccount}
          >
            <h1 className="text-4xl font-bold">
              {loginState ? "Log in" : "Sign up"}
            </h1>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                placeholder="Fullname"
                hidden={loginState}
                type="text"
                name="fullname"
                onChange={handleUserInput}
                value={loginState ? loginData.email : signupData.email}
              />
            </div>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                placeholder="Mobile Number"
                hidden={loginState}
                type="text"
                name="Mobile Number"
                onChange={handleUserInput}
                value={loginState ? loginData.email : signupData.email}
              />
            </div>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                placeholder="E-mail Address"
                type="email"
                name="email"
                onChange={handleUserInput}
                value={loginState ? loginData.email : signupData.email}
              />
            </div>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleUserInput}
                value={loginState ? loginData.password : signupData.password}
              />
            </div>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                placeholder="Confirm Password"
                type="password"
                hidden={loginState}
                name="confirmPassword"
                onChange={handleUserInput}
                value={loginState ? loginData.password : signupData.password}
              />
            </div>
            <div>
              <input
                className="bg-white border-b-2  w-[350px] text-2xl pb-3 pl-2 outline-none focus:border-[#33FF00]"
                
                type="file"
                hidden={loginState}
                name="citizenshipImage"
              />
            </div>


            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="bg-[#33FF00] w-[96px] h-[40px] rounded-[20px] text-white text-xl"
              >
                {loginState ? "Login" : "Sign up"}
              </button>

              <p className="text-xl">Forgot Password?</p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <p className="text-xl">
                {loginState
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <div className="flex gap-3 font-semibold text-[15px] items-center ">
                <button
                  className="bg-[#33FF00] w-[78px] h-[30px] rounded-[20px] text-white font-semibold"
                  onClick={(e) => switchLoginState(e)}
                >
                  {loginState?'Register':'login'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>

      <Link to="/">
        <button className="bg-[#33FF00] w-[96px] h-[30px] rounded-[20px]">
          Book Now
        </button>
      </Link>
    </div>
  );
}
export default Signin;
