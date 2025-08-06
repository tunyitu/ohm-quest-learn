import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckCircle, XCircle, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Activity {
  id: number;
  question: string;
  given: { [key: string]: string };
  find: string;
  correctAnswer: number;
  unit: string;
  hint: string;
}

const ActivitiesSection = () => {
  const { toast } = useToast();
  const [currentActivity, setCurrentActivity] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [completed, setCompleted] = useState<boolean[]>([]);
  const [attempts, setAttempts] = useState<number[]>([]);

  const activities: Activity[] = [
    {
      id: 1,
      question: "Una làmpada LED té una resistència de 150Ω i funciona amb un corrent de 0.02A. Quin voltatge necessita?",
      given: { "R": "150Ω", "I": "0.02A" },
      find: "V",
      correctAnswer: 3,
      unit: "V",
      hint: "Recorda: V = I × R"
    },
    {
      id: 2,
      question: "Un circuit amb un voltatge de 9V té una resistència total de 18Ω. Quin corrent hi circula?",
      given: { "V": "9V", "R": "18Ω" },
      find: "I",
      correctAnswer: 0.5,
      unit: "A",
      hint: "Recorda: I = V ÷ R"
    },
    {
      id: 3,
      question: "Un ventilador consumeix 1.5A quan es connecta a 12V. Quina és la seva resistència?",
      given: { "V": "12V", "I": "1.5A" },
      find: "R",
      correctAnswer: 8,
      unit: "Ω",
      hint: "Recorda: R = V ÷ I"
    },
    {
      id: 4,
      question: "Una resistència de 220Ω es connecta a una bateria de 6V. Quin corrent passa per la resistència?",
      given: { "V": "6V", "R": "220Ω" },
      find: "I",
      correctAnswer: 0.027,
      unit: "A",
      hint: "El resultat ha de ser un número petit. Utilitza decimals."
    },
    {
      id: 5,
      question: "Un circuit necessita 2.5A per funcionar i té una resistència de 4.8Ω. Quin voltatge mínim necessita la font d'alimentació?",
      given: { "I": "2.5A", "R": "4.8Ω" },
      find: "V",
      correctAnswer: 12,
      unit: "V",
      hint: "Multiplica el corrent per la resistència."
    }
  ];

  const activity = activities[currentActivity];

  const checkAnswer = () => {
    const answer = parseFloat(userAnswer);
    const activityAttempts = attempts[currentActivity] || 0;
    
    if (Math.abs(answer - activity.correctAnswer) < 0.01) {
      // Correct answer
      const newCompleted = [...completed];
      newCompleted[currentActivity] = true;
      setCompleted(newCompleted);
      
      toast({
        title: "Correcte! 🎉",
        description: `Has resolt l'activitat ${currentActivity + 1} correctament.`,
      });
    } else {
      // Wrong answer
      const newAttempts = [...attempts];
      newAttempts[currentActivity] = activityAttempts + 1;
      setAttempts(newAttempts);
      
      toast({
        title: "Resposta incorrecta",
        description: newAttempts[currentActivity] >= 2 ? activity.hint : "Torna-ho a intentar!",
        variant: "destructive"
      });
    }
    setUserAnswer("");
  };

  const nextActivity = () => {
    if (currentActivity < activities.length - 1) {
      setCurrentActivity(currentActivity + 1);
      setUserAnswer("");
    }
  };

  const prevActivity = () => {
    if (currentActivity > 0) {
      setCurrentActivity(currentActivity - 1);
      setUserAnswer("");
    }
  };

  const completedCount = completed.filter(Boolean).length;
  const progressPercentage = (completedCount / activities.length) * 100;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
          <Trophy className="text-electric-yellow" />
          <span>Activitats Pràctiques</span>
        </h2>
        <p className="text-muted-foreground mb-4">
          Resol aquests exercicis per practicar la llei d'Ohm
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span>Progrés</span>
            <span>{completedCount}/{activities.length}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="bg-gradient-electric h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Activity Navigation */}
      <div className="flex justify-center items-center space-x-4">
        <Button
          onClick={prevActivity}
          disabled={currentActivity === 0}
          variant="outline"
        >
          ← Anterior
        </Button>
        
        <div className="flex space-x-2">
          {activities.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentActivity(index)}
              variant={currentActivity === index ? "default" : "outline"}
              size="sm"
              className={`w-10 h-10 ${completed[index] ? 'bg-electric-green text-white' : ''}`}
            >
              {completed[index] ? <CheckCircle className="w-4 h-4" /> : index + 1}
            </Button>
          ))}
        </div>
        
        <Button
          onClick={nextActivity}
          disabled={currentActivity === activities.length - 1}
          variant="outline"
        >
          Següent →
        </Button>
      </div>

      {/* Current Activity */}
      <Card className="p-8 bg-gradient-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">
            Activitat {currentActivity + 1}
          </h3>
          <Badge variant={completed[currentActivity] ? "default" : "outline"}>
            {completed[currentActivity] ? "Completada" : "Pendent"}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Question */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Problema:</h4>
              <p className="text-muted-foreground leading-relaxed">
                {activity.question}
              </p>
            </div>

            {/* Given Values */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-electric-green">Dades conegudes:</h4>
              <div className="space-y-2">
                {Object.entries(activity.given).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">{key}:</span>
                    <Badge variant="secondary">{value}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-electric-purple">Trobar:</h4>
              <Badge variant="outline" className="text-lg p-2">
                {activity.find} = ? {activity.unit}
              </Badge>
            </div>
          </div>

          {/* Answer Section */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="answer" className="text-lg font-semibold">
                La teva resposta:
              </Label>
              <div className="flex space-x-2 mt-2">
                <Input
                  id="answer"
                  type="number"
                  step="any"
                  placeholder="Introdueix la resposta"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="text-lg"
                />
                <Badge variant="outline" className="flex items-center px-3">
                  {activity.unit}
                </Badge>
              </div>
            </div>

            <Button
              onClick={checkAnswer}
              disabled={!userAnswer || completed[currentActivity]}
              className="w-full text-lg h-12"
            >
              {completed[currentActivity] ? "Ja completada" : "Comprovar resposta"}
            </Button>

            {/* Show hint after 2 attempts */}
            {(attempts[currentActivity] || 0) >= 2 && !completed[currentActivity] && (
              <div className="p-4 bg-electric-yellow/10 border border-electric-yellow/20 rounded-lg">
                <h5 className="font-semibold text-electric-yellow mb-2">💡 Pista:</h5>
                <p className="text-foreground">{activity.hint}</p>
              </div>
            )}

            {/* Show correct answer if completed */}
            {completed[currentActivity] && (
              <div className="p-4 bg-electric-green/10 border border-electric-green/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-electric-green" />
                  <h5 className="font-semibold text-electric-green">Correcte!</h5>
                </div>
                <p className="text-foreground">
                  Resposta: {activity.correctAnswer} {activity.unit}
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Completion Message */}
      {completedCount === activities.length && (
        <Card className="p-8 bg-gradient-electric text-white text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Felicitats!</h3>
          <p className="text-lg opacity-90">
            Has completat totes les activitats de la llei d'Ohm. Ara ja ets un expert!
          </p>
        </Card>
      )}
    </div>
  );
};

export default ActivitiesSection;