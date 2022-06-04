// import Features from "../components/Features";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";

// import ProfileView from "../components/ProfileView";
import useTheming from "../hooks/useTheme";
import "../styles/profile.css";
function Profile() {
  const [switchTheme, theme] = useTheming();
  return (
    <div id="profile" className="" data-theme={theme}>
      <Navbar theme={switchTheme} />
    </div>
  );
}
export default Profile;
