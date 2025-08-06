import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'teoria', label: 'Teoria', icon: '📚' },
    { id: 'exemples', label: 'Exemples', icon: '💡' },
    { id: 'calculadora', label: 'Calculadora', icon: '🧮' },
    { id: 'activitats', label: 'Activitats', icon: '✏️' }
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-electric">
              <Zap className="w-6 h-6 text-white animate-electric-pulse" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-electric bg-clip-text text-transparent">
              Llei d'Ohm
            </h1>
          </div>
          
          <div className="flex space-x-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => onSectionChange(section.id)}
                className="flex items-center space-x-2"
              >
                <span>{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;