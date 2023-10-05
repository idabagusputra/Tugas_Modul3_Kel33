import React, { useState, useEffect } from "react";
import "./App.css";

// Import the image
import imageToShow from "../counter10.png";

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
      setShowImage(true);
    } else {
      setShowMessage(false);
      setShowImage(false);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>Nilai Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>Tambah 1</button>
      <button onClick={() => setCount(count - 1)}>Kurangi 1</button>

      {showMessage && <p></p>}

      {/* Conditionally render the image */}
      {showImage && <img src={imageToShow} alt="Your Image" />}
    </div>
  );
}

export default App;
