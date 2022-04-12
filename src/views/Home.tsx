import Header from '../components/Header';
import { ISection } from '../types';

export default function Home({ section }: ISection) {
  return (
    <div ref={section}>
      <Header />
    </div>
  );
}
