import { stats } from '@/constants';

const OurStats: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100 sm:py-8 lg:py-8">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Discover how we are transforming healthcare with our trusted platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {stats && stats.length > 0 ? (
            stats.map((stat, index) => (
              <div key={index}>
                <h3 className="font-bold text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                    {stat.value}
                  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">{stat.title}</p>
                <p className="text-base mt-0.5 text-gray-500">{stat.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No stats available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStats;