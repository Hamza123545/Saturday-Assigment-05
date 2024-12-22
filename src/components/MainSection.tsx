import Image from "next/image";

export default function MainSection() {
  return (
    <>
      {/* Main Section: Content and Image Layout */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 bg-white text-[#222222] h-auto w-full px-6 md:px-8 xl:px-24 py-8">
        
        {/* Left Side: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            className="max-w-full h-auto w-32 md:w-auto"
            src="/img/p2.png"
            alt="random image"
            width={500}
            height={500}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-['Inter'] text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-tight">
            Work Together
          </h1>
          <p className="mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`With Whitepace, share your notes with your colleagues and collaborate
            on them. You can also publish a note to the internet and share the
            URL with others.`}
          </p>
          {/* Action Button: Try it now */}
          <button className="bg-[#4F9CF9] text-white shadow-xl px-6 py-2 md:px-8 md:py-2 rounded-md font-semibold hover:font-bold">
            Try it now
          </button>
        </div>
      </div>
    </>
  );
}
