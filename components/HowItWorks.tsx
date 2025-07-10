
import { steps } from '@/constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How ONMED Care Works</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Get started with ONMED Care in three simple steps to access top-quality healthcare.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps && steps.length > 0 ? (
              steps.map((step) => (
                <div key={step.step}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">{step.step}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{step.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{step.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No steps available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;