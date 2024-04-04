import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Browse from "./pages/Browse";

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/pages/" element={<Browse />} />
            </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;