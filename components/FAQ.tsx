import { faqs } from '@/constants';

const FAQ: React.FC = () => {
  return (
    <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">ONMED Care FAQ</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {faqs && faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="py-2 outline-none cursor-pointer focus:underline group-open:underline">
                  {faq.question}
                </summary>
                <div className="px-4 pb-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </details>
            ))
          ) : (
            <p className="text-gray-100 text-center">No FAQs available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;