import Image from 'next/image';

import { Doctors } from '@/constants';

const MeetOurDoctors: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet Our Doctors</h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Discover the dedicated professionals at ONMED Care, ready to provide you with top-quality healthcare.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {Doctors && Doctors.length > 0 ? (
            Doctors.map((doctor, index) => (
              <>
                <div key={doctor.name}>
                  <Image
                    className="object-cover mx-auto rounded-lg w-28 h-28"
                    src={doctor.image}
                    alt={`${doctor.name} portrait`}
                    width={112}
                    height={112}
                  />
                  <p className="mt-8 text-lg font-semibold leading-tight text-black">{doctor.name}</p>
                  <p className="mt-1 text-base leading-tight text-gray-600">
                    {doctor.role === 'Gyneacologist' ? 'Gynecologist' : doctor.role === 'Practioner' ? 'Practitioner' : doctor.role}
                  </p>
                </div>
                {index < Doctors.length - 1 && <div className="hidden lg:block"></div>}
              </>
            ))
          ) : (
            <p className="text-gray-600">No doctors available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctors;