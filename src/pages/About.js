import Navbar from "../components/Navbar";
import useTheming from "../hooks/useTheme";
function About() {
  const [switchTheme, theme] = useTheming();
  return (
    <div className="flex justify-center" data-theme={theme}>
      <Navbar theme={switchTheme} />
    </div>
  );
}
export default About;
