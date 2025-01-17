import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Anshul Sharma</h1>
          <p className="text-xl mb-8">Full Stack Java Developer</p>
          <a href="#contact" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">Get in Touch</a>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image src="/profile-pic.jpg" alt="Anshul Sharma" width={150} height={150} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
