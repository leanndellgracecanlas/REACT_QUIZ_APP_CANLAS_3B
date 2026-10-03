export function QuestionComponent({ questionNumber, questionText }) {
  return (
    <div className="question-box">
      <span className="question-tag">Q #{questionNumber}</span>
      <h2 className="question-text">{questionText}</h2>
    </div>
  );
}