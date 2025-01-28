import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-darkBlue h- p-8 flex flex-col gap-6 justify-evenly text-white sm:px-24">
      <div className="sm:flex gap-16">
        <div className="flex justify-evenly items-center gap-6 w-72 text-xs bg-blue-950 p-2 rounded-xl m-2">
          <div className="w-1/4">
            <Image
              src="/assets/telephoneFooter.png"
              alt="loc"
              width={50}
              height={20}
              className="inline mx-2  w-12 h-10"
            />
          </div>
          <div className="w-3/4">
            <p>Phone Number</p>
            <p className="font-semibold">+91932929128</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-6 w-72 text-xs bg-blue-950 p-2 rounded-xl m-2">
          <div className="w-1/4">
            <Image
              src="/assets/emailFooter.png"
              alt="loc"
              width={50}
              height={20}
              className="inline mx-2  w-12 h-10"
            />
          </div>
          <div className="w-3/4">
            <p>Email Address</p>
            <p className="font-semibold">Elbrithcqhr@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-6 w-72 bg-blue-950 p-2 rounded-xl text-xs m-2">
          <div className="w-1/4">
            <Image
              src="/assets/offLocFooter.png"
              alt="loc"
              width={50}
              height={20}
              className="inline mx-2 w-12 h-10"
            />
          </div>
          <div className="w-3/4">
            <p>Office Location</p>
            <p className="font-semibold"> Ambassador Street, Zone 61,</p>
          </div>
        </div>
      </div>
      <div className="flex gap-16">
        <div>
          <Image
            src="/assets/footerLogo.png"
            alt="loc"
            width={150}
            height={0}
            className="inline mx-2"
          />
        </div>
        <div className="text-xs w-80">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </div>
      </div>
      <div className="text-xs">
        <Image
          src="/assets/locationSymbol.svg"
          alt="loc"
          width={10}
          height={0}
          className="inline mx-2"
        />
        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </div>
    </footer>
  );
};

export default Footer;
