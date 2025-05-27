import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="mx-auto px-0 space-y-20">
      <Header />
      <ProjectSection />
      <Footer />
    </div>
  );
}
