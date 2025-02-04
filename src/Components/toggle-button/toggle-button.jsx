import "./toggle-button.css";

function ButtonToggle({ showAvailable, toggle, selectedCount }) {
  return (
    <div className="flex gap-0">
      <button
        className={`toggle-button ${showAvailable ? "active" : ""}`}
        onClick={() => toggle()}
      >
        Available
      </button>
      <button
        className={`toggle-button ${!showAvailable ? "active" : ""}`}
        onClick={() => toggle()}
      >
        Selected ({selectedCount})
      </button>
    </div>
  );
}

export default ButtonToggle;
