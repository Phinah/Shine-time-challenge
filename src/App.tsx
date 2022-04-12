import { useRef } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import About from './views/About';
import Services from './views/Services';
import FAQ from './views/FAQ';
import JoinUs from './views/JoinUs';
import Contact from './views/Contact';
import ScrollToTop from './components/ScrollToTop';
import ROUTES from './routes';
import { ILink } from './types';
import Footer from './views/Footer';

function App() {
  const HOME = useRef<HTMLDivElement>(null);
  const ABOUT = useRef<HTMLDivElement>(null);
  const SERVICES = useRef<HTMLDivElement>(null);
  const CONTACT = useRef<HTMLDivElement>(null);
  const JOINUS = useRef<HTMLDivElement>(null);
  const FAQS = useRef<HTMLDivElement>(null);

  const links: ILink[] = [
    { text: 'About us', to: `${ROUTES.ABOUT}`, section: ABOUT },
    {
      text: 'Services',
      to: `${ROUTES.SERVICES}`,
      section: SERVICES,
    },
    { text: 'Contact', to: `${ROUTES.CONTACT}`, section: CONTACT },
    { text: 'Join us', to: `${ROUTES.JOINUS}`, section: JOINUS },
    { text: 'Faqs', to: `${ROUTES.FAQS}`, section: FAQS },
  ];

  return (
    <>
      <ScrollToTop />
      <Nav links={links} />
      <Home section={HOME} />
      <About section={ABOUT} />
      <Services section={SERVICES} />
      <FAQ section={FAQS} />
      <Contact section={CONTACT} />
      <JoinUs section={JOINUS} />
      <Footer />
    </>
  );
}

export default App;
