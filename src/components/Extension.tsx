import Image from "next/image";

export default function Extension() {
  return (
    <>
      {/* Main container for the section with flex layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto md:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8">
        
        {/* Left side content section with text and button */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Use as Extension
          </h1>

          {/* Description text */}
          <p className="text-white mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {` Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.`}
          </p>

          {/* Let's Go button */}
          <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 md:py-2 rounded-md text-white font-semibold hover:font-bold">
            {`Let's Go`}
          </button>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/img/container.png"
            alt="Extension Screenshot"
            width={824}
            height={529}
          />
        </div>
      </div>
    </>
  );
}
