import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import TrustedTechnologies from "./components/TrustedTechnologies";
import About from "./sections/About";
import CoreExpertise from "./sections/CoreExpertise";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import LeadershipImpact from "./sections/LeadershipImpact";
import ProfessionalGrowth from "./sections/ProfessionalGrowth";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <TrustedTechnologies />

        <About />

        <CoreExpertise />

        <Experience />

        <LeadershipImpact />

        <ProfessionalGrowth />

        <Contact />

        <WhatsAppButton />
      </main>
      
      <Footer />

    </div>
  );
}

export default App;