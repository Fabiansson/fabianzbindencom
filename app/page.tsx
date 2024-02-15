import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Socials from "./components/Socials";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center pt-16">
      <div className="max-w-4xl w-full flex flex-col space-y-20 mb-20">
        <div className="ml-auto mr-0 mb-60">
          <Socials></Socials>
        </div>

        <HeroSection></HeroSection>
        <TimelineSection></TimelineSection>
        <ProjectSection></ProjectSection>
      </div>
      <FooterSection></FooterSection>
    </main>
  );
}
