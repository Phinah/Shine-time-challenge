import ContactForm from '../components/ContactForm';
import { ISection } from '../types';

export default function Contact({ section }: ISection) {
  return (
    <div
      className="py-24 bg-primary h-full md:h-[40vw] md:max-h-[40vw]"
      ref={section}
    >
      <div className="container mx-auto px-9 md:px-96">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-cursive underline text-white text-2xl md:text-5xl">
            Contact
          </h2>
          <h2 className="text-sm md:text-2xl text-center text-drk pt-5 md:pt-10">
            Pellentesque aliquam massa nunc, interdum finibus erat vulputate id.
          </h2>
          <div className="pt-6 md:pt-16 flex justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
