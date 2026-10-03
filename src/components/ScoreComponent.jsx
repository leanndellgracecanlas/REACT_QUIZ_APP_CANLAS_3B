// src/components/ScoreComponent.jsx
export function ScoreComponent({ score, total, onRestart }) {
  return (
    <div className="score-card">
      <div className="trophy-icon">🏆</div>
      <h2>Your Final Score</h2>
      <div className="score-display">
        {score} / {total}
      </div>
      <p className="score-message">
        You answered {score} out of {total} questions correctly ({Math.round((score / total) * 100)}%)!
      </p>
      <button className="btn-primary" onClick={onRestart}>
        Retake Quiz ↺
      </button>
    </div>
  );
}