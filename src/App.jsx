// src/App.jsx
import { useState } from "react";
import { questions } from "./questions";
import { WelcomeComponent } from "./components/WelcomeComponent";
import { QuestionPageComponent } from "./components/QuestionPageComponent";
import { ScoreComponent } from "./components/ScoreComponent";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("welcome"); // "welcome" | "quiz" | "score"
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);

  // Starts the quiz directly from the Welcome page
  const handleStart = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setAnswersHistory([]);
  };

  // Resets state and sends the user back to the Welcome page
  const handleGoHome = () => {
    setScreen("welcome");
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setAnswersHistory([]);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === questions[currentIndex].correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    const updatedHistory = [...answersHistory, isCorrect];
    setAnswersHistory(updatedHistory);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      setScreen("score");
    }
  };

  return (
    <div className="stage-wrapper">
      <div className="canvas-16-9">
        {screen === "welcome" && <WelcomeComponent onStart={handleStart} />}

        {screen === "quiz" && (
          <QuestionPageComponent
            currentQuestion={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            answersHistory={answersHistory}
            onSelectAnswer={setSelectedAnswer}
            onNext={handleNext}
          />
        )}

        {screen === "score" && (
          <ScoreComponent
            score={score}
            total={questions.length}
            onRestart={handleGoHome}
          />
        )}
      </div>
      
    </div>
  );
}