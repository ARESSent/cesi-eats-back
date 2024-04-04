import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./Layout";
import Browse from "./Browse"; // Assure-toi que ces composants existent
import CreateAccount from "./CreateAccount";
import Connexion from "./Connexion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Définis des routes comme enfants de `Layout` */}
          <Route index element={<Browse />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="Connexion" element={<Connexion />} />
          {/* Tu peux ajouter plus de routes ici */}
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));