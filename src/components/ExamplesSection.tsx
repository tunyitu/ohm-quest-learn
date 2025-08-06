import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ExamplesSection = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      title: "Exemple 1: Calcular el Voltatge",
      problem: "Una bombeta té una resistència de 10Ω i per ella circula un corrent de 2A. Quin és el voltatge?",
      given: {
        R: "10Ω",
        I: "2A",
        V: "?"
      },
      solution: [
        "Utilitzem la fórmula: V = I × R",
        "Substituïm els valors: V = 2A × 10Ω",
        "Calculem: V = 20V"
      ],
      result: "El voltatge és de 20 volts"
    },
    {
      title: "Exemple 2: Calcular el Corrent",
      problem: "Un circuit té un voltatge de 12V i una resistència de 4Ω. Quin corrent hi circula?",
      given: {
        V: "12V",
        R: "4Ω",
        I: "?"
      },
      solution: [
        "Utilitzem la fórmula: I = V ÷ R",
        "Substituïm els valors: I = 12V ÷ 4Ω",
        "Calculem: I = 3A"
      ],
      result: "El corrent és de 3 amperes"
    },
    {
      title: "Exemple 3: Calcular la Resistència",
      problem: "Un motor funciona amb 24V i consumeix 6A. Quina és la seva resistència?",
      given: {
        V: "24V",
        I: "6A",
        R: "?"
      },
      solution: [
        "Utilitzem la fórmula: R = V ÷ I",
        "Substituïm els valors: R = 24V ÷ 6A",
        "Calculem: R = 4Ω"
      ],
      result: "La resistència és de 4 ohms"
    }
  ];

  const currentExample = examples[selectedExample];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Exemples Pràctics</h2>
        <p className="text-muted-foreground">
          Aprèn com aplicar la llei d'Ohm amb aquests exemples pas a pas
        </p>
      </div>

      {/* Example Selection */}
      <div className="flex justify-center space-x-4">
        {examples.map((_, index) => (
          <Button
            key={index}
            variant={selectedExample === index ? "default" : "outline"}
            onClick={() => setSelectedExample(index)}
            className="min-w-[120px]"
          >
            Exemple {index + 1}
          </Button>
        ))}
      </div>

      {/* Example Content */}
      <Card className="p-8 bg-gradient-card">
        <h3 className="text-2xl font-bold mb-6 text-center text-primary">
          {currentExample.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-electric-blue">Problema:</h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentExample.problem}
              </p>
            </div>

            {/* Given Values */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-electric-green">Dades:</h4>
              <div className="space-y-2">
                {Object.entries(currentExample.given).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">{key}:</span>
                    <Badge variant={value === "?" ? "destructive" : "secondary"}>
                      {value}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-electric-purple">Solució:</h4>
              <ol className="space-y-3">
                {currentExample.solution.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Result */}
            <div className="p-4 bg-electric-green/10 border border-electric-green/20 rounded-lg">
              <h5 className="font-semibold text-electric-green mb-2">Resultat:</h5>
              <p className="text-foreground font-medium">{currentExample.result}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExamplesSection;