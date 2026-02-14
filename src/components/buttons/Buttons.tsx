import { useState } from "react";

const lightColors = ["lightcoral", "mediumseagreen", "lightseagreen"];
const darkColors = ["#8B4513", "#2F4F4F", "#483D8B"];

export default function Buttons() {
  const [color, setColor] = useState("gray");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colors = isDarkMode ? darkColors : lightColors;
  const defaultBg = isDarkMode ? "#1a1a1a" : "gray";
  const disabledColor = isDarkMode ? "#2a2a2a" : "lightgray";

  return (
    <div
      className="relative flex justify-center items-center gap-4 w-full h-screen"
      style={{ backgroundColor: color === "gray" ? defaultBg : color }}
      data-testid="container"
    >
      {/* Theme Switcher */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            setColor(isDarkMode ? "gray" : "#1a1a1a");
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110"
          style={{ 
            backgroundColor: isDarkMode ? "#f0f0f0" : "#2a2a2a",
            color: isDarkMode ? "#2a2a2a" : "#f0f0f0"
          }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            // Sun Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            // Moon Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Color Buttons */}
      {colors.map((colorValue, index) => (
        <button
          key={index}
          style={{ backgroundColor: !isDisabled ? colorValue : disabledColor }}
          className="w-32 h-10 shadow-xl rounded-lg disabled:bg-gray-400 disabled:text-gray-700 transition-colors"
          disabled={isDisabled}
          onClick={() => setColor(colorValue)}
        >
          {isDarkMode ? `dark ${index + 1}` : (lightColors[index])}
        </button>
      ))}
      <button
        className="w-32 h-10 shadow-xl rounded-lg transition-colors"
        style={{
          backgroundColor: isDarkMode ? "#663300" : "#92400e",
          color: "#ffffff"
        }}
        onClick={() => {
          setColor(defaultBg);
          setIsDisabled(!isDisabled);
        }}
      >
        {isDisabled ? 'party pooper' : '?'}
      </button>
    </div>
  );
}
