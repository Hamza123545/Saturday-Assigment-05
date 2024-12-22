import Image from "next/image";

export default function Try() {
  return (
    <>
      <div className="flex justify-center items-center text-center bg-[#043873] h-auto w-full md:px-8 xl:px-24 py-12">
        <div className="w-[80%] px-8 md:px-auto md:w-1/2">
          {/* Main Heading */}
          <h1 className="text-white font-['Inter'] text-2xl lg:text-[60px] font-semibold">
            Try Whitepace today
          </h1>
          
          {/* Description */}
          <p className="text-white mt-4 mb-4">
            {`Get started for free. Add your whole team as your needs grow.`}
          </p>
          
          {/* Button to Start */}
          <button className="bg-[#4F9CF9] px-8 py-2 rounded-md text-white font-semibold">
            Try Taskey free
          </button>
          
          {/* Additional Info */}
          <p className="text-white mt-4 mb-4">
            {`On a big team? Contact sales`}
          </p>
          
          {/* App Icons Section */}
          <div className="flex justify-center gap-8 items-center text-white mt-4">
            {/* App Icons (Apple, Windows, Android) */}
            <Image
              src="/img/icons/apple.png"
              alt="Apple Icon"
              width={60}
              height={60}
              className="text-white w-12 md:w-[60px]"
            />
            <Image
              src="/img/icons/window.png"
              alt="Windows Icon"
              width={60}
              height={60}
              className="text-white w-12 md:w-[60px]"
            />
            <Image
              src="/img/icons/android.png"
              alt="Android Icon"
              width={60}
              height={60}
              className="text-white w-12 md:w-[60px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
