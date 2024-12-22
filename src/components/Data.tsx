import Image from "next/image";

export default function Data() {
  return (
    <>
      {/* Main container for the section with flex layout */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white h-auto lg:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8 md:py-0">

        {/* Left side content section with text and button */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          {/* Heading */}
          <h1 className="text-[#222222] font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            {`100% your data`}
          </h1>

          {/* Description text */}
          <p className="text-[#222222] mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.`}
          </p>

          {/* Read More button */}
          <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 md:py-2 rounded-md text-white font-semibold">
            Read More
          </button>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="max-w-full h-auto"
            src="/img/p1.png"
            alt="Data image"
            width={824}
            height={529}
          />
        </div>
      </div>
    </>
  );
}
