// Import the necessary libraries and components
import React from "react"; // Import the React library
import ReactDOM from "react-dom"; // Import ReactDOM for rendering React components
import App from "./App"; // Import the main App component
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for client-side routing

// Use ReactDOM to render the main application component
ReactDOM.render(
  // Wrap the entire application in React.StrictMode for development debugging and warnings
  <React.StrictMode>
    {/* Use BrowserRouter to provide client-side routing capabilities */}
    <BrowserRouter>
      {/* Render the main App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // Attach the rendered content to the element with the id "root" in the HTML document
  document.getElementById("root")
);