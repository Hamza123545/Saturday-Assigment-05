import Image from "next/image";

export default function Customized() {
  return (
    <>
      {/* Main container for the section with flex layout and padding */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white text-[#222222] h-auto w-full px-6 md:px-8 xl:px-24 py-12">
        
        {/* Left Side: Display Image */}
        <div className="flex justify-center w-full md:w-1/2 py-2">
          <Image
            className="max-w-full h-auto"
            src="/img/container.png"
            alt="Customized Container"
            width={824}
            height={529}
          />
        </div>

        {/* Right Side: Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* Title */}
          <h1 className="font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Customise it to your needs
          </h1>
          
          {/* Description text */}
          <p className="mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`Customise the app with plugins, custom themes, and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.`}
          </p>
          
          {/* Call-to-action button */}
          <button className="bg-[#4F9CF9] text-white border shadow-xl px-6 py-2 md:px-8 rounded-md font-semibold hover:font-bold">
            {`Let's Go`}
          </button>
        </div>
      </div>
    </>
  );
}
