import "./Login.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Button, SocialLink } from "../../components";
import { motion } from "framer-motion";
import { ROUTES } from "../../constants/routing/routePath";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const Login = () => {
  const { goToRooms } = useCustomNavigation();
  const title = "LOOT ROYALE".split("");

  const goToTwitter = () => {
    window.open(ROUTES.twitterRedirect, "_blank");
  };

  const goToDiscord = () => {
    window.open(ROUTES.discordRedirect, "_blank");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 1000, 
        damping: 10, 
        mass: 1 
      },
    },
  };
  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="images/BackGround.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      </div>
      <div className="flex flex-col gap-4 pt-10 items-center absolute bottom-20 right-20 w-5/12 h-1/2 bg-white-beige-50 rounded-lg shadow-lg p-5 z-20">
        {/* Animated Title */}
        <motion.div
          className="text-8xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <Button
          onClick={goToRooms}
          className="w-4/12 h-4/12 shadow-lg rounded-lg bg-beige-100 text-white flex justify-center text-4xl"
        >
          Play
        </Button>
        {/* Replace () => { } below with relevant function */}
        <Button
          onClick={() => {}}
          className="w-4/12 h-4/12 shadow-lg rounded-lg bg-beige-100 text-white flex justify-center text-4xl"
        >
          How to Play
        </Button>
        <div className="flex justify-between items-center w-full mt-auto text-3xl">
          <p className="font-bold pl-4 underline">Feedback</p>
          <div className="flex gap-6">
            <SocialLink
              icon={<FaTwitter />}
              label="Twitter"
              onClick={goToTwitter}
              className="text-twitter-100"
            />
            <SocialLink
              icon={<BsDiscord />}
              label="Discord"
              onClick={goToDiscord}
              className="text-discord-100 pr-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
