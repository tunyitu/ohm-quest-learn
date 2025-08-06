import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/ohms-law-hero.jpg";

const TheorySection = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-hero p-8 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Llei d'Ohm" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">La Llei d'Ohm</h2>
          <p className="text-xl mb-6 opacity-90">
            Descobreix la relació fonamental entre voltatge, corrent i resistència
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-center mb-2">V = I × R</div>
            <div className="text-sm text-center opacity-90">
              Voltatge = Corrent × Resistència
            </div>
          </div>
        </div>
      </div>

      {/* Theory Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-card border-electric-blue/20 hover:shadow-electric transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Voltatge (V)</h3>
              <Badge variant="secondary" className="text-xs">Volts</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            El voltatge és la diferència de potencial elèctric entre dos punts. 
            És la "força" que empeny els electrons a través d'un circuit.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-electric-green/20 hover:shadow-electric transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-electric-green/20 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Corrent (I)</h3>
              <Badge variant="secondary" className="text-xs">Amperes</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            El corrent és el flux d'electrons que circula pel circuit. 
            Es mesura en amperes i representa la quantitat de càrrega que passa per un punt.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-card border-electric-purple/20 hover:shadow-electric transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Resistència (R)</h3>
              <Badge variant="secondary" className="text-xs">Ohms</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            La resistència és l'oposició al flux de corrent. 
            Com més resistència, més difícil és que passi el corrent pel circuit.
          </p>
        </Card>
      </div>

      {/* Formula Explanation */}
      <Card className="p-8 bg-gradient-electric text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">Com funciona la fórmula?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">V = I × R</div>
            <p className="opacity-90">Voltatge és igual a corrent per resistència</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">I = V ÷ R</div>
            <p className="opacity-90">Corrent és igual a voltatge dividit per resistència</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">R = V ÷ I</div>
            <p className="opacity-90">Resistència és igual a voltatge dividit per corrent</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TheorySection;