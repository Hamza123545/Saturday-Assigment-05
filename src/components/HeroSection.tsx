import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Main Section: Hero Area */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto md:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Get More Done with Whitepace
          </h1>
          <p className="text-white mt-4 mb-6 text-sm md:text-base lg:text-lg leading-relaxed">
            {`Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.`}
          </p>
          {/* Action Button: Try Writepace Free */}
          <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 rounded-md text-white font-semibold hover:shadow-lg">
            Try Writepace Free
          </button>
        </div>

        {/* Right Side: Hero Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/img/container.png"
            alt="Hero Image"
            width={824}
            height={529}
          />
        </div>
      </div>
    </>
  );
}
