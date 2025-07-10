import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#dff1db] pt-24 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase sm:text-base">
              Your trusted healthcare platform
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Book appointments with top doctors
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Access quality healthcare anytime with ONMED Care.
            </p>
            <div className='flex gap-4'>
            <Link href="/login" >
            <button
              className="inline-flex items-center mt-4 px-6 py-4 font-semibold text-black transition-all duration-200 bg-green-300 rounded-full lg:mt-5 hover:bg-green-400 focus:bg-green-400"
              role="button"
            >
              Schedule now
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            </Link>
            </div>
            
            
          </div>
          <div>
            <Image
              className="w-full"
              src="/assets/images/dr-gre.png"
              alt="Hero image"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;