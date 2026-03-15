import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Procedures from "@/components/Procedures";
import ClinicSection from "@/components/ClinicSection";
import Differentials from "@/components/Differentials";
import Results from "@/components/Results";
import Location from "@/components/Location";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Procedures />
      <ClinicSection />
      <Differentials />
      <Results />
      <Location />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
