import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button.js";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to TaskBurrow</h1>

      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
    </div>
  );
}

export default App;
