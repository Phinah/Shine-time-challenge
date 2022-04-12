import { ISection } from '../types';

export default function About({ section }: ISection) {
  return (
    <div className="flex flex-col px-5 py-6 md:px-44 md:py-28" ref={section}>
      <h2
        className={`text-5xl font-normal underline capitalize font-cursive text-red-title text-center py-5`}
      >
        About us
      </h2>
      <h2 className={`text-base font-bold`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis, orci at accumsan rutrum, purus massa maximus dolor, blandit
        suscipit risus enim in nulla.
      </h2>
      <h2 className={`text-base pt-12`}>
        Duis eu faucibus dolor, et pellentesque velit. Ut commodo sodales
        suscipit. Sed ullamcorper leo eu euismod commodo. Pellentesque aliquam
        massa nunc, interdum finibus erat vulputate id.
      </h2>
    </div>
  );
}
