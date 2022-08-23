import CalendarIcon from "../assets/icons/calendar";
import { HomeIcon } from "../assets/icons/home";
import ProfileIcon from "../assets/icons/profile";
import StatsIcon from "../assets/icons/stats";

const BottomTabBarIcon = ({ route, focused }) => {
  switch (route) {
    case "HomeStack":
      return <HomeIcon color={focused ? "#FF4155" : "#636364"} />;
    case "Calendar":
      return <CalendarIcon color={focused ? "#FF4155" : "#636364"} />;
    case "Stats":
      return <StatsIcon color={focused ? "#FF4155" : "#636364"} />;
    case "Profile":
      return <ProfileIcon color={focused ? "#FF4155" : "#636364"} />;
    default:
      return <HomeIcon color={focused ? "#FF4155" : "#636364"} />;
  }
};

export default BottomTabBarIcon;
