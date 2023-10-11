import "./theme.css";
import "./App.css";
import ResultScore from "./components/ResultScore/ResultScore";
import ResultsSummary from "./components/ResultsSummary/ResultsSummary";

function App() {
  return (
    <div className="results">
      <ResultScore />
      <ResultsSummary />
    </div>
  );
}

export default App;
