import { useState } from "react";
import Navigation from "@/components/Navigation";
import TheorySection from "@/components/TheorySection";
import ExamplesSection from "@/components/ExamplesSection";
import CalculatorSection from "@/components/CalculatorSection";
import ActivitiesSection from "@/components/ActivitiesSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("teoria");

  const renderSection = () => {
    switch (activeSection) {
      case "teoria":
        return <TheorySection />;
      case "exemples":
        return <ExamplesSection />;
      case "calculadora":
        return <CalculatorSection />;
      case "activitats":
        return <ActivitiesSection />;
      default:
        return <TheorySection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
