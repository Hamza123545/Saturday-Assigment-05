import Image from "next/image";

export default function Favoraite() {
  return (
    <>
      {/* Main container for the section with flex layout */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto lg:h-[90vh] w-full md:px-8 xl:px-24 py-8 md:py-0">
        
        {/* Left side: Image section, hidden on small screens */}
        <div className="hidden md:flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/img/p3.PNG"
            alt="apps"
            width={824}
            height={529}
          />
        </div>

        {/* Right side: Text section with heading, description, and button */}
        <div className="w-full px-6 md:px-4 md:w-1/2">
          {/* Heading text */}
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Work with Your Favorite Apps Using Whitepace
          </h1>

          {/* Description text */}
          <p className="text-white mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.`}
          </p>

          {/* Read More button */}
          <button className="bg-[#4F9CF9] px-6 py-2 rounded-md text-white font-semibold text-sm md:text-base">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
