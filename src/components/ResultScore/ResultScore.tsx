import "../../theme.css";
import "./ResultScore.css";

const ResultScore = () => {
  const userScore: number = 76;
  return (
    <section className="results__score">
      <h2 className="results__scoreHeader">Your Result</h2>
      <p className="results__userScoreContainer">
        <span className="results__userScoreValue">{userScore.toString()}</span>
        of 100
      </p>
      <p className="results__userScoreQuality">Great</p>
      <p className="results__userScoreComparison">
        Your performance exceeds 65% of the people conducting the test here!
      </p>
    </section>
  );
};

export default ResultScore;
