import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            {/* <Image
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="/assets/images/dots-pattern.svg"
              alt="Dots pattern"
              width={100}
              height={100}
            /> */}
            <div className="pl-12 pr-6">
              <Image
                className="relative"
                src="/assets/images/happy.jpg"
                alt="Doctor at work"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-xs font-sm text-white sm:text-sm">
                        “ONMED Care made booking my doctor’s appointment so easy and fast. It’s a game-changer!”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-2xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl lg:leading-tight">
              About Us at ONMED Care
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              At ONMED Care, we’re dedicated to making healthcare accessible and convenient. 
              Our platform connects you with trusted doctors for seamless appointment booking.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">
              With a focus on patient care and innovation, we empower you to take control of 
              your health with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;