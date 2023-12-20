import "./Login.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/rooms");
  };
  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="/images/BackGround.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      </div>
      <div className="flex flex-col gap-4 pt-10 items-center absolute bottom-20 right-20 w-5/12 h-1/2 bg-white-beige-50 rounded-lg shadow-lg p-5 z-20">
        <h2 className="text-8xl">Loot Royale</h2>
        <button onClick={handlePlayClick} className="w-4/12 h-4/12 bg-beige-100 text-4xl text-white shadow-lg rounded-lg">
          Play
        </button>
        <button className="w-4/12 h-4/12 bg-beige-100 text-4xl text-white shadow-lg rounded-lg">
          How to Play
        </button>
        <div className="flex justify-between items-center w-full mt-auto text-3xl">
          <p className="font-bold pl-4 underline">Feedback</p>
          <div className="flex gap-6">
            <div className="flex gap-1 justify-center items-center text-twitter-100">
              {" "}
              <FaTwitter/> 
              <div className="-mb-1">Twitter</div>
            </div>
            <div className="flex gap-1 justify-center items-center text-discord-100 pr-4">
              {" "}
              <BsDiscord /> 
              <div className="-mb-1">Discord</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
