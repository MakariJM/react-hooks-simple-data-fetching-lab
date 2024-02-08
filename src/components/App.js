import React, { useState, useEffect } from "react";

// This is for creating a functional component called App
function App() {
  // For Initializing the state variable for the dog image URL
  const [dogImageUrl, setDogImageUrl] = useState("");

  // For defining the useEffect hook to send a fetch request to the API
  useEffect(() => {
    const fetchData = async () => {
      // Sending a fetch request to the API
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      // To convert the response to JSON
      const data = await response.json();

      // For Updating the state variable with the response data
      setDogImageUrl(data.message);
    };

    // For Calling the fetchData function
    fetchData();
  }, []);

  // JSX code to be rendered
  return (
    <div className="App">
      {!dogImageUrl ? (
        <p>Loading...</p>
      ) : (
        // Displaying the dog image
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
