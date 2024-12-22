import Image from "next/image";

export default function Clients() {
  return (
    <>
      {/* Container for the entire section with padding and background */}
      <div className="bg-white w-full h-auto py-8 ">
        
        {/* Section title */}
        <h1 className="text-black text-center text-2xl font-bold my-4 lg:text-[70px]">
          What Our Clients Says
        </h1>
        
        {/* Flex container for images, switches between column and row layouts on different screen sizes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
          
          {/* Image 1: Client's testimonial image */}
          <Image
            className="cursor-pointer"
            src="/img/client/c1.png"
            alt="apps"
            width={300}
            height={350}
          />
          
          {/* Image 2: Client's testimonial image */}
          <Image
            className="cursor-pointer"
            src="/img/client/c2.png"
            alt="apps"
            width={300}
            height={350}
          />
          
          {/* Image 3: Client's testimonial image */}
          <Image
            className="cursor-pointer"
            src="/img/client/c3.png"
            alt="apps"
            width={300}
            height={350}
          />
        </div>
      </div>
    </>
  );
}
