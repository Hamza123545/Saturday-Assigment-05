export default function Work() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#043873] h-auto md:h-[90vh] w-full px-6 md:px-8 xl:px-24 py-8">
        {/* Left Section: Content */}
        <div className="w-full text-left md:text-left lg:w-[60%]">
          <h1 className="text-white font-['Inter'] text-[32px] md:text-[48px] lg:text-[65px] font-semibold leading-tight">
            {`Your work, everywhere you are`}
          </h1>
          <p className="text-white mt-2 mb-4 text-sm md:text-base lg:text-lg leading-relaxed">
            {`Access your notes from your computer, phone or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!`}
          </p>
          <button className="bg-[#4F9CF9] px-6 py-2 md:px-8 md:py-2 rounded-md text-white font-semibold hover:font-bold">
            Try Taskey
          </button>
        </div>
      </div>
    </>
  );
}
