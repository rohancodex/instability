import download from "../assets/images/pixeltrue-icons-web-design-planning-2.svg";
import secure from "../assets/images/pixeltrue-icons-security-3.svg";
import adfree from "../assets/images/pixeltrue-icons-seo-ads-on-google.svg";
function Features() {
  return (
    <div className="container mx-auto flex flex-col items-center my-5 lg:flex-row lg:justify-between lg:mx-auto lg:my-32">
      <div className="my-5">
        <img
          src={secure}
          alt="anonymity"
          className="h-64 w-64 lg:h-96 lg:w-96"
        />
        <p className="text-center text-xl lg:text-3xl">Browse anonymously</p>
      </div>
      <div className="my-5">
        <img
          src={download}
          alt="download"
          className="h-64 w-64 mx-auto lg:h-96 lg:w-96"
        />
        <p className="text-center text-xl lg:text-3xl">
          Download posts and stories easily
        </p>
      </div>
      <div className="my-5">
        <img src={adfree} alt="ad free" className="h-64 w-64 lg:h-96 lg:w-96" />
        <p className="text-center text-xl lg:text-3xl">Ad-free</p>
      </div>
    </div>
  );
}

export default Features;
