import { ISection } from '../types';

export default function FAQ({ section }: ISection) {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque.',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque.',
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque.',
    },
  ];
  return (
    <div className="flex flex-col px-5 py-6 md:px-56 md:py-16" ref={section}>
      <h2
        className={`text-2xl md:text-5xl font-normal underline font-cursive text-red-title text-center py-5`}
      >
        FAQs
      </h2>
      {faqs.map((faq, i) => (
        <div className="flex flex-col items-center mb-10 text-center" key={i}>
          <h2 className={`text-base md:text-3xl font-bold text-red`}>
            {faq.question}
          </h2>
          <h2 className={`pt-3 text-sm md:text-2xl font-normal text-secondary`}>
            {faq.answer}
          </h2>
        </div>
      ))}
    </div>
  );
}
