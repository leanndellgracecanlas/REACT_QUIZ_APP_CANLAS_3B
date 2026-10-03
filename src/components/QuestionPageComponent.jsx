import { ProgressComponent } from "./ProgressComponent"; 
import { QuestionComponent } from "./QuestionComponent"; 
import { OptionComponent } from "./OptionComponent";

export function QuestionPageComponent({ 
    currentQuestion, 
    questionNumber, 
    totalQuestions, 
    selectedAnswer, 
    answersHistory, 
    onSelectAnswer, 
    onNext 
}) {
    const isLast = questionNumber === totalQuestions;
    return (
  <div className="question-page-layout">
    <ProgressComponent
      total={totalQuestions}
      currentIndex={questionNumber - 1}
      answersHistory={answersHistory}
    />

    <QuestionComponent
      questionNumber={questionNumber}
      questionText={currentQuestion.questionText}
    />

    <OptionComponent
      options={currentQuestion.options}
      selectedOption={selectedAnswer}
      onSelect={onSelectAnswer}
    />

    <div className="action-row">
      <button
        className="btn-primary btn-next"
        onClick={onNext}
        disabled={!selectedAnswer}
      >
        {isLast ? "Finish \u2713" : "Next \u2192"}
      </button>
    </div>
  </div>
);
}
