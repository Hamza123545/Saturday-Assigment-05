import Image from "next/image";

export default function Plan() {
  return (
    <>
      <div className="bg-white w-full h-auto py-8 px-4">
        {/* Heading Section: Title of the Plan Section */}
        <h1 className="text-black text-center text-2xl font-bold my-4 lg:text-[40px] xl:text-[70px]">
          Choose Your Plan
        </h1>

        {/* Description Section: Brief explanation of the plans */}
        <p className="mt-4 text-center text-sm md:text-base lg:text-lg">
          {`Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.`}
        </p>

        {/* Plans Section: Displaying different plans as images */}
        <div className="flex flex-wrap justify-center items-center gap-4 py-10">
          
          {/* Plan 1: Image for the first plan */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb2.png"
            alt="Plan 1"
            width={341}
            height={697}
          />
          
          {/* Plan 2: Image for the second plan */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb1.png"
            alt="Plan 2"
            width={345}
            height={710}
          />
          
          {/* Plan 3: Image for the third plan */}
          <Image
            className="cursor-pointer"
            src="/img/cards/pb3.png"
            alt="Plan 3"
            width={341}
            height={697}
          />
        </div>
      </div>
    </>
  );
}
