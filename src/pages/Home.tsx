import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Research from "../components/Research";
import Tools from "../components/Tools";
import Documents from "../components/Documents";
import Team from "../components/Team";
import Milestones from "../components/Milestones";
import ResearchDomain from "../components/ResearchDomain";

export default function Home() {
  return (
    <>
      <Hero /> 
      <About /> 
      <ResearchDomain />
      <Research />
      <Features />
      <Tools />
      <Milestones />
      <Documents />
      <Team />
    </>
  );
}
