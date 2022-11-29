import styles from "./Style.module.css";
import KEYS from "../../data/abc.json";

type keyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled = false, 
  addGuessedLetter,
}: keyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
