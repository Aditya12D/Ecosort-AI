import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/HowItWorks";
import EnvironmentalImpact from "../components/EnviornentalImapact";
import heroBg from "../assets/river.jpg";

function LandingPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <Navbar />
      <section id="home" className="scroll-mt-32 relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#08140F]" />

        <div className="relative z-10">
          
          <main className="pt-36 px-8 max-w-7xl mx-auto">
            <HeroSection />
          </main>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 bg-[#08140F] relative z-10">
        <AboutSection />
      </section>

      <section
        id="features"
        className="scroll-mt-32 bg-gradient-to-b from-[#08140F] via-[#0b1913] to-[#0D1C15]"
      >
        <HowItWorks />
      </section>

      <section id="impact" className="scroll-mt-32 bg-gradient-to-b from-[#0D1C15] to-[#06100C]">
        <EnvironmentalImpact />
      </section>

      <section className=" scroll-mt-32 bg-gradient-to-b from-[#06100C] to-[#040a08] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white">
            Ready to Make Recycling
            <span className="text-emerald-400"> Smarter?</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Upload a waste image and let EcoSort AI identify, classify, and guide
            you toward the correct disposal method in seconds.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-10 px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400 hover:scale-105 transition-all duration-300"
          >
            Analyze Waste
          </button>
        </div>
      </section>

      <footer className="scroll-mt-32 bg-[#040a08] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-white font-semibold text-lg">
            EcoSort <span className="text-emerald-400">AI</span>
          </h3>

          <p className="text-gray-500 text-sm">
            © 2026 EcoSort AI • Built by Aditya Dev Sharma
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;