import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";

// import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

export const getIcons = (iconName, iconColor) => {
  const icons = {
    gift: <FaGift size={30} color={iconColor} />,
    house: <FaHome size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    taxi: <FaWineGlassAlt size={30} color={iconColor} />,
  };
  return icons[iconName];
};
