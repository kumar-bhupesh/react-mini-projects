
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (star) => {
    setHoveredRating(star);
  };

  const handleClick = (star) => {
    setRating(star);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className="App">
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <span
            key={index}
            className={`star ${index < (hoveredRating || rating) ? "filled" : ""}`}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
          >
            <FaStar
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
