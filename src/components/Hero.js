import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 relative">
        <div className="absolute right-4 top-0">
          <Image src="/profile-pic.jpg" alt="Anshul Sharma" width={150} height={150} className="rounded-full" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 w-full">Hi, I'm Anshul Sharma</h1>
          <p className="text-xl mb-8">Full Stack Java Developer</p>
          <a href="#contact" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 mt-8">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
