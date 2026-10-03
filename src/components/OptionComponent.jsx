// src/components/OptionComponent.jsx
export function OptionComponent({ options, selectedOption, onSelect }) {
  return (
    <div className="options-grid">
      {options.map((option, idx) => (
        <label
          key={idx}
          className={`option-card ${selectedOption === option ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="quiz-option"
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelect(option)}
          />
          <span className="radio-custom"></span>
          <span className="option-label">{option}</span>
        </label>
      ))}
    </div>
  );
}