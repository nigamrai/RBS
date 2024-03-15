import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import customerService from "../assets/images/CustomerService.png";
import background from "../assets/images/background.png";
import interior from "../assets/images/interior.png";
import people from "../assets/images/people.png";
import wifi from "../assets/images/wifi.png";

function HomePage() {
  const [dates, setDates] = useState([]);

  const getDates = () => {
    let currentDate = new Date();
    let datesArray = [];
    for (let i = 0; i < 7; i++) {
      let formattedDate = currentDate.toISOString().slice(0, 10);
      datesArray.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDates(datesArray);
  };

  let quantity = 1;
  let quantityArray = [];
  for (let i = 1; i <= 20; i++) {
    quantityArray.push(quantity);
    quantity = quantity + 1;
  }

  useEffect(() => {
    getDates();
  }, []);

  return (
    <HomeLayout>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
        }}
        className="h-[571px] text-white  flex flex-col items-center pt-[70px]"
      >
        <h1 className="text-[50px] font-bold w-[600px]">
          Book your perfect room with Ease and Efficiency
        </h1>
        <p className="text-[40px] ">
          Experience hassle-free room booking tooday!
        </p>

        <Link to="/">
          <button className="bg-[#33FF00] w-[125px] h-[30px] rounded-[20px] mt-[60px] font-bold">
            Explore rooms
          </button>
        </Link>
      </div>
      <form className=" h-[188px] bg-white shadow-2xl m-auto mt-[-100px] grid grid-cols-3 justify-content-center justify-items-center py-[20px] ">
        <div className="flex flex-col  gap-1">
          <label
            htmlFor="checkIn"
            className="text-[12px] font-bold text-[#808080]"
          >
            Check In
          </label>
          <select className="select border-2 border-black bg-white  max-w-xs text-black w-[350px]">
            {dates.map((date) => {
              return <option key={date}>{date}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="adult"
            className="text-[12px] font-bold text-[#808080]"
          >
            Adult
          </label>
          <select className="select select-bordered bg-white  max-w-xs text-black w-[350px]">
            {quantityArray.map((date) => {
              return <option key={date}>{date}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col  gap-1">
          <label
            htmlFor="rooms"
            className="text-[12px] font-bold text-[#808080]"
          >
            Rooms
          </label>
          <select className="select select-bordered bg-white  max-w-xs text-black w-[350px]">
            {quantityArray.map((date) => {
              return <option key={date}>{date}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col  gap-1">
          <label
            htmlFor="checkIn"
            className="text-[12px] font-bold text-[#808080]"
          >
            Check out
          </label>
          <select className="select select-bordered bg-white max-w-xs text-black w-[350px]">
            {dates.map((date) => {
              return <option key={date}>{date}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col  gap-1">
          <label
            htmlFor="checkOut"
            className="text-[12px] font-bold text-[#808080]"
          >
            Children
          </label>
          <select className="select select-bordered bg-white  max-w-xs text-black w-[350px]">
            {quantityArray.map((date) => {
              return <option key={date}>{date}</option>;
            })}
          </select>
        </div>
        <Link to="/about">
          <button className="bg-[#33FF00] w-[320px] h-[48px] text-white font-bold mt-[20px]">
            Check Availability
          </button>
        </Link>
      </form>
      <div className=" my-[70px] flex justify-center flex-col items-center">
        <h3 className="text-[40px] text-black font-semibold w-[600px] text-center">
          Choose Your Excellent Choice For Vacation
        </h3>
        <p className="text-[20px] text-[#7F7F7F] w-[1150px] text-center">
          Create Unforgettable Memories: Whether you're looking for adventure,
          relaxation, or a little bit of both, we've got you covered. Choose
          from our range of activities and experiences to create your ideal
          vacation
        </p>
      </div>
      <div className="flex gap-8 justify-center  mb-[80px]">
        <div className="shadow-xl w-[300px] h-[200px] border-1 flex flex-col justify-center items-center gap-2">
          <img src={customerService} />
          <div className="text-center">
            <p className="text-[25px] text-black">Customer Service</p>
            <p className="text-[14px]">24hrs Customer Service</p>
          </div>
        </div>

        <div className="shadow-xl w-[300px] h-[200px] border-1 flex flex-col justify-center items-center gap-2">
          <img src={interior} />
          <div className="text-center">
            <p className="text-[25px] text-black">Family Size Rooms</p>
            <p className="text-[14px]">Available</p>
          </div>
        </div>

        <div className="shadow-xl w-[300px] h-[200px] border-1 flex flex-col justify-center items-center gap-2">
          <img src={people} />
          <div className="text-center">
            <p className="text-[25px] text-black">Conference Rooms</p>
            <p className="text-[14px]">Conference rooms available</p>
          </div>
        </div>

        <div className="shadow-xl w-[300px] h-[200px] border-1 flex flex-col justify-center items-center gap-2">
          <img src={wifi} />
          <div className="text-center">
            <p className="text-[25px] text-black">Free Wi-Fi</p>
            <p className="text-[14px]">24hrs free wifi zone</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
export default HomePage;
