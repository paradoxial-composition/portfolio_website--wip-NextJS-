import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import BackToTop from '../components/BackToTop/BackToTop'
import { projects, packages } from "../constants/constants";
import { Analytics } from "@vercel/analytics/react"

const Home = ( {data}) => {
  return (
    <Layout>
      <BackToTop/>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects title="Projects" projects={projects}/>
      <Projects title="Packages" projects={packages}/>
      <Technologies />
      <Timeline />
      <Acomplishments data={data} />
      <Analytics />
    </Layout>
  );
};

export default Home;
