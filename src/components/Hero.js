import Image from 'next/image';

const Hero = () => {
  return (
    <div className="animate-fadeIn">
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm Anshul Sharma
            </h1>
            <p className="text-lg md:text-xl mb-6 text-green-700">
              Java Developer
            </p>
            <a
              href="#contact"
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Profile Image */}
          <div className="mb-8 md:mb-0 order-first md:order-last md:ml-8">
            <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
              <Image
                src="/profile-pic.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;