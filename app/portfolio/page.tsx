import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

const Portfolio = () => {
  return (
    <div className="mx-auto px-0 space-y-20 mt-16">
      <ProjectSection />
      <SkillSection />
      <Contact />

      <Footer />
    </div>
  );
};

export default Portfolio;
