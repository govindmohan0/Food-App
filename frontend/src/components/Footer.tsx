const Footer = () => {
    return (
      <footer className="bg-orange-500 py-10">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            FoodApp.com
          </span>
          <div className="text-white font-bold tracking-tight flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  