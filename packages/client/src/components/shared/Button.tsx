import { motion } from "framer-motion";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const buttonHoverAnimation = disabled
    ? undefined  
    : {
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 150,
        },
      };

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  const buttonClass = `cursor-pointer ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <motion.div
      whileHover={buttonHoverAnimation}
      onClick={handleClick}
      className={buttonClass}
      // the bottom 3 is to deal with accessibility issues
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {children}
    </motion.div>
  );
};

export default Button;
