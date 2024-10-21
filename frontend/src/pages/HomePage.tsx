import landing from "../assets/landing.png";
import download from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      {/* Adjusting grid layout here */}
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <img src={landing} className="w-full h-auto" alt="Landing" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster
          </span>
          <span>
            Download the FoodApp for faster ordering and personalized
            recommendations
          </span>
          <img src={download} className=" h-auto" alt="Download App" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
