import Image from "next/image";

export default function Sponsors() {
  return (
    <>
      <div className="bg-white w-full h-auto py-8">
        
        {/* Heading for the Sponsors Section */}
        <h1 className="text-black text-center text-2xl font-bold my-4 lg:text-[70px]">
          Our Sponsors
        </h1>
        
        {/* Sponsor Logos Section */}
        <div className="flex flex-col mt-4 md:flex-row justify-center items-center gap-14 p-8 py-10">
          {/* Sponsor Logos */}
          <Image
            className="cursor-pointer"
            src="/img/logo/apple.png" 
            alt="Apple"
            width={55}
            height={68}
          />
          <Image
            className="cursor-pointer"
            src="/img/logo/microsoft.png" 
            alt="Microsoft"
            width={287}
            height={62}
          />
          <Image
            className="cursor-pointer"
            src="/img/logo/slack.png" 
            alt="Slack"
            width={280}
            height={70}
          />
          <Image
            className="cursor-pointer"
            src="/img/logo/google.png" 
            alt="Google"
            width={211}
            height={71}
          />
        </div>
      </div>
    </>
  );
}
