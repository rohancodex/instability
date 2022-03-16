import download from "../assets/images/pixeltrue-icons-web-design-planning-2.svg";
import secure from "../assets/images/pixeltrue-icons-security-3.svg";
import adfree from "../assets/images/pixeltrue-icons-seo-ads-on-google.svg";
function Features() {
  return (
    <div className="container flex flex-col items-center my-10 lg:flex-row ">
      <div className="my-5">
        <img src={secure} alt="anonymity" className="h-64 w-64" />
        <p className="text-center text-xl">Browse anonymously</p>
      </div>
      <div className="my-5">
        <img src={download} alt="download" className="h-64 w-64" />
        <p className="text-center">Download posts and stories easily</p>
      </div>
      <div className="my-5">
        <img src={adfree} alt="ad free" className="h-64 w-64" />
        <p className="text-center">Ad-free</p>
      </div>
    </div>
  );
}

export default Features;
