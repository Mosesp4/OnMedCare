const OurServices: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Online Appointment Booking',
      description: 'Easily schedule appointments with top doctors from the comfort of your home using our user-friendly platform.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: 'Access to Specialists',
      description: 'Connect with a wide network of experienced specialists across various medical fields for personalized care.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Secure Patient Portal',
      description: 'Manage your health records, view appointment history, and communicate securely with your doctors.',
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-3xl">Our Services at ONMED Care</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Discover how ONMED Care delivers exceptional healthcare through our comprehensive services.
          </p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <li key={service.title} className="relative flex items-start">
                {index < services.length - 1 && (
                  <div
                    className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                    aria-hidden="true"
                  ></div>
                )}
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                  {service.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{service.description}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">No services available at the moment.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;