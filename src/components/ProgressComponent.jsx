export function ProgressComponent({ total, currentIndex, answersHistory }) {
  return (
    <div className="progress-wrapper">
      <p className="progress-subtitle">
        Question {currentIndex + 1} of {total}
      </p>
      <div className="progress-dots">
        {Array.from({ length: total }).map((_, idx) => {
          const status = answersHistory[idx];
          return (
            <div
              key={idx}
              className={`dot ${
                status === true
                  ? "correct"
                  : status === false
                  ? "incorrect"
                  : idx === currentIndex
                  ? "active"
                  : ""
              }`}
            >
              {status === true ? "✓" : status === false ? "✕" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}