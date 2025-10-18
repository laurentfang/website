import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const sectionVisibility = {
  hero: true,
  stats: true,
  mission: true,
  values: true,
  steps: true,
  culture: false,
  achievements: true,
  team: true,
  testimonials: false,
  faqs: true,
  contact: true,
} as const;

const Page = () => {
  return (
    <>
      {sectionVisibility.hero && <Hero2 {...hero2About} />}
      {sectionVisibility.stats && <Stats {...statsAbout} />}
      {sectionVisibility.mission && <Features4 {...featuresFourAbout} />}
      {sectionVisibility.values && <Features4 {...featuresFourAboutTwo} />}
      {sectionVisibility.steps && <Steps {...stepsAbout} />}
      {sectionVisibility.culture && <Features3 {...features3About} />}
      {sectionVisibility.achievements && <Features {...featuresAbout} />}
      {sectionVisibility.team && <Team2 {...teamAbout} />}
      {sectionVisibility.testimonials && <Testimonials2 {...testimonials2About} />}
      {sectionVisibility.faqs && <FAQs {...faqsAbout} />}
      {sectionVisibility.contact && <Contact {...contactAbout} />}
    </>
  );
};

export default Page;
