export function WelcomeComponent({ onStart }) { return (
    <div className="welcome-container">
        <span className="app-badge">General Knowledge Quiz</span>
        <h1>Welcome to the Quiz!</h1>
        <p>Test your knowledge with 10 fun and interactive questions!</p>
        <button className="btn-primary" onClick={onStart}>Start Quiz
            Start Quiz &rarr;
        </button>
    </div>
); }