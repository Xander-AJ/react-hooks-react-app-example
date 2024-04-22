import { format } from "date-fns";
import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Import TestComponent

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Display "Now" instead of the formatted time */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent text="Whoa!" />
      <TestComponent title="time video" /> {/* Include TestComponent with the correct title attribute */}
    </div>
  );
}

export default App;
