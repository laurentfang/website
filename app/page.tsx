import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import DroneGif from '~/components/widgets/DroneGif';
import VideoClip from '~/components/widgets/VideoClip';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

const sectionVisibility = {
  hero: true,
  socialProof: false,
  features: true,
  droneGif: true,
  videoClip: true,
  contentOne: false,
  contentTwo: false,
  steps: false,
  testimonials: false,
  faqs: false,
  pricing: false,
  team: false,
  contact: true,
  callToAction: false,
} as const;

export default function Page() {
  return (
    <>
      {sectionVisibility.hero && <Hero {...heroHome} />}
      {sectionVisibility.socialProof && <SocialProof {...socialProofHome} />}
      {sectionVisibility.features && <Features {...featuresHome} />}
      {sectionVisibility.droneGif && <DroneGif />}
      {sectionVisibility.videoClip && <VideoClip />}
      {sectionVisibility.contentOne && <Content {...contentHomeOne} />}
      {sectionVisibility.contentTwo && <Content {...contentHomeTwo} />}
      {sectionVisibility.steps && <Steps {...stepsHome} />}
      {sectionVisibility.testimonials && <Testimonials {...testimonialsHome} />}
      {sectionVisibility.faqs && <FAQs2 {...faqs2Home} />}
      {sectionVisibility.pricing && <Pricing {...pricingHome} />}
      {sectionVisibility.team && <Team {...teamHome} />}
      {sectionVisibility.contact && <Contact {...contactHome} />}
      {sectionVisibility.callToAction && <CallToAction2 {...callToAction2Home} />}
    </>
  );
}
