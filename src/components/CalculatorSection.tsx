import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";

const CalculatorSection = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [calculating, setCalculating] = useState<"voltage" | "current" | "resistance" | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const calculateVoltage = () => {
    if (current && resistance) {
      const v = parseFloat(current) * parseFloat(resistance);
      setVoltage(v.toFixed(2));
      setCalculating("voltage");
      setResult(`V = I × R = ${current}A × ${resistance}Ω = ${v.toFixed(2)}V`);
    }
  };

  const calculateCurrent = () => {
    if (voltage && resistance) {
      const i = parseFloat(voltage) / parseFloat(resistance);
      setCurrent(i.toFixed(2));
      setCalculating("current");
      setResult(`I = V ÷ R = ${voltage}V ÷ ${resistance}Ω = ${i.toFixed(2)}A`);
    }
  };

  const calculateResistance = () => {
    if (voltage && current) {
      const r = parseFloat(voltage) / parseFloat(current);
      setResistance(r.toFixed(2));
      setCalculating("resistance");
      setResult(`R = V ÷ I = ${voltage}V ÷ ${current}A = ${r.toFixed(2)}Ω`);
    }
  };

  const reset = () => {
    setVoltage("");
    setCurrent("");
    setResistance("");
    setCalculating(null);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
          <Calculator className="text-primary" />
          <span>Calculadora de la Llei d'Ohm</span>
        </h2>
        <p className="text-muted-foreground">
          Introdueix dos valors i calcula el tercer automàticament
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="p-8 bg-gradient-card">
          <h3 className="text-xl font-semibold mb-6 text-center">Introdueix els valors</h3>
          
          <div className="space-y-6">
            {/* Voltage Input */}
            <div className="space-y-2">
              <Label htmlFor="voltage" className="flex items-center space-x-2">
                <span className="text-electric-blue">⚡</span>
                <span>Voltatge (V)</span>
                <Badge variant="outline" className="text-xs">Volts</Badge>
              </Label>
              <Input
                id="voltage"
                type="number"
                placeholder="Introdueix el voltatge"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className={calculating === "voltage" ? "border-electric-blue bg-electric-blue/5" : ""}
                disabled={calculating === "voltage"}
              />
            </div>

            {/* Current Input */}
            <div className="space-y-2">
              <Label htmlFor="current" className="flex items-center space-x-2">
                <span className="text-electric-green">🔄</span>
                <span>Corrent (I)</span>
                <Badge variant="outline" className="text-xs">Amperes</Badge>
              </Label>
              <Input
                id="current"
                type="number"
                placeholder="Introdueix el corrent"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className={calculating === "current" ? "border-electric-green bg-electric-green/5" : ""}
                disabled={calculating === "current"}
              />
            </div>

            {/* Resistance Input */}
            <div className="space-y-2">
              <Label htmlFor="resistance" className="flex items-center space-x-2">
                <span className="text-electric-purple">🚧</span>
                <span>Resistència (R)</span>
                <Badge variant="outline" className="text-xs">Ohms</Badge>
              </Label>
              <Input
                id="resistance"
                type="number"
                placeholder="Introdueix la resistència"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
                className={calculating === "resistance" ? "border-electric-purple bg-electric-purple/5" : ""}
                disabled={calculating === "resistance"}
              />
            </div>
          </div>
        </Card>

        {/* Calculation Buttons */}
        <Card className="p-8 bg-gradient-card">
          <h3 className="text-xl font-semibold mb-6 text-center">Què vols calcular?</h3>
          
          <div className="space-y-4">
            <Button
              onClick={calculateVoltage}
              disabled={!current || !resistance}
              className="w-full justify-start h-16 text-left bg-electric-blue/10 hover:bg-electric-blue/20 border border-electric-blue/20"
              variant="outline"
            >
              <div>
                <div className="font-semibold">Calcular Voltatge</div>
                <div className="text-sm opacity-70">V = I × R</div>
              </div>
            </Button>

            <Button
              onClick={calculateCurrent}
              disabled={!voltage || !resistance}
              className="w-full justify-start h-16 text-left bg-electric-green/10 hover:bg-electric-green/20 border border-electric-green/20"
              variant="outline"
            >
              <div>
                <div className="font-semibold">Calcular Corrent</div>
                <div className="text-sm opacity-70">I = V ÷ R</div>
              </div>
            </Button>

            <Button
              onClick={calculateResistance}
              disabled={!voltage || !current}
              className="w-full justify-start h-16 text-left bg-electric-purple/10 hover:bg-electric-purple/20 border border-electric-purple/20"
              variant="outline"
            >
              <div>
                <div className="font-semibold">Calcular Resistència</div>
                <div className="text-sm opacity-70">R = V ÷ I</div>
              </div>
            </Button>

            <Button
              onClick={reset}
              className="w-full"
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reiniciar
            </Button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-gradient-electric rounded-lg text-white">
              <h4 className="font-semibold mb-2">Resultat:</h4>
              <p className="font-mono text-lg">{result}</p>
            </div>
          )}
        </Card>
      </div>

      {/* Visual Formula */}
      <Card className="p-8 bg-gradient-hero text-white text-center">
        <div className="text-6xl font-bold mb-4">V = I × R</div>
        <div className="grid md:grid-cols-3 gap-4 text-sm opacity-90">
          <div>Voltatge (V) = Volts</div>
          <div>Corrent (I) = Amperes</div>
          <div>Resistència (R) = Ohms</div>
        </div>
      </Card>
    </div>
  );
};

export default CalculatorSection;